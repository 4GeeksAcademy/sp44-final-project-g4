"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, VetFavoriteModel, VetReviewModel, PostModel, VetModel, WalkerModel, ReviewWalkers, FavoriteWalkers, GroomerModel, GroomerFavoritesModel, GroomerReviewsModel


from api.utils import generate_sitemap, APIException
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/signup/<string:user_type>', methods=['POST'])
def signup(user_type):
    # Here we need to improve the function so only emails in admin table can check "isAdmin: True".
    # Also validations for email password and phone number.
    request_body = request.json

    if user_type == "user":
        user = User(**request_body) 

        db.session.add(user)
        db.session.commit()
        response_body = {"message": "New User Successfully Created",
                         "status": "ok",
                         "user": request_body}

        if response_body:
            return response_body, 200
        else:
            return "User could not be created"

    if user_type == "vet":
        vet = VetModel(**request_body)

        db.session.add(vet)
        db.session.commit()
        response_body = {"message": "New Vet Successfully Created",
                         "status": "ok",
                         "user": request_body}

        if response_body:
            return response_body, 200
        else:
            return "Vet could not be created"

    return "User type not correct", 404

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.get("/hello")
@jwt_required()
def greeting():

    greet = {
         "message": "hi there this route is protected by JWT"
    }
    return greet, 200

# User endpoints


@api.route('/users/<string:user_type>', methods=['GET'])
@jwt_required()
def get_all_users(user_type):
# Route admin?
    if user_type == 'user':
        users = db.session.execute(
            db.select(User).order_by(User.name)).scalars()
        results = [item.serialize() for item in users]
        response_body = {"message": "all users",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if user_type == 'vet':
        users = db.session.execute(
            db.select(VetModel).order_by(VetModel.name)).scalars()
        results = [item.serialize() for item in users]
        response_body = {"message": "all users",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404


@api.route('/user/<int:id>/<string:user_type>', methods=['GET'])
@jwt_required()
def get_single_user(id, user_type):
    #Admin route?

    if user_type == "user":
        user = db.get_or_404(User, id)
        response_body = {"status": "ok",
                         "results": user.serialize()}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if user_type == "vet":
        vet = db.get_or_404(VetModel, id)
        response_body = {"status": "ok",
                         "results": vet.serialize()}

        if response_body:
            return response_body, 200
        else:
            return {"message": "Vet Id Not Found",
                    "status": 404}


@api.route('/users/<int:user_id>/<string:user_type>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id, user_type):
    # Note: here we need to improve the deletion function. Only an admin can delete any user,
    # and only a logged user can delete (calcell) hes own account.
    if user_type == "user":
        user_to_delete = db.get_or_404(User, user_id)

        try:
            db.session.delete(user_to_delete)
            db.session.commit()
            return "User Deleted Successfully", 200
        except:
            return "User not found", 404
        
    if user_type == "vet":
        vet_to_delete = db.get_or_404(VetModel, user_id)

        try:
            db.session.delete(vet_to_delete)
            db.session.commit()
            return "User Deleted Successfully", 200
        except:
            return "User not found", 404


@api.route('/favorite/<int:user_id>', methods=['POST', 'GET'])
@jwt_required()
def get_user_vet_favorites(user_id, professional_type):

    favorite = db.session.execute(
        db.select(VetFavoriteModel).order_by(VetFavoriteModel.id)).scalars()
    response = [item.serialize()
                for item in favorite if item.user_id == user_id]
    body = {"message": f'Favorite for User_id: {user_id}',
            "results": response,
            "status": "ok"}

    if body:
        return body, 200
    else:
        return "Not Found", 404


@api.route('/review/<int:user_id>', methods=['POST', 'GET'])
@jwt_required()
def get_user_vet_reviews(user_id):

    if request.method == 'GET':
        # THIS ONLY BRINGS ONE
        review = db.session.execute(
            db.select(VetReviewModel).order_by(VetReviewModel.id)).scalars()
        response = [item.serialize()
                    for item in review if item.user_id == user_id]
        response_body = {"message": f'Reviews for User_id: {user_id}',
                         "results": response,
                         "status": "ok"}

    if response_body:
        return response_body, 200
    else:
        return "Not Found", 404


@api.route('/posts', methods=['POST', 'GET'])
def get_posts():
    if request.method == 'GET':
        posts = db.session.execute(
            db.select(PostModel).order_by(PostModel.date)).scalars()
        results = [item.serialize() for item in posts]
        response = {"message": "All posts fetched successfully",
                    "results": results,
                    "status": "ok"}

        if response:
            return response, 200
        else:
            return "Not Found", 404


    return jsonify(response), 200








@api.route('/walkers', methods=['GET', 'POST'])
def handle_walkers():
    if request.method == 'GET':

        walkers = db.session.execute(
            db.select(WalkerModel).order_by(WalkerModel.name)).scalars()

        result = [item.serialize() for item in walkers]

        response_body = {"message": "List of walkers",
                         "status": "OK",
                         "response": result}

        return response_body, 200

    if request.method == 'POST':

        request_body = request.get_json()

        walker = WalkerModel(**request_body)

        db.session.add(walker)
        db.session.commit()

        response_body = {"message": "New walker add",
                         "status": "Ok",
                         "response": request_body}

        return response_body, 200


@api.route('/walkers/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_walker(id):

    if request.method == 'GET':

        walker = db.get_or_404(WalkerModel, id)

        response_body = {"message": "Walker filtered by ID",
                         "status": "OK",
                         "response": walker.serialize()}

        return response_body, 200

    if request.method == 'PUT':

        request_body = request.get_json()

        walker = db.get_or_404(WalkerModel, id)

        walker.name = request_body["name"]
        walker.surname = request_body["surname"]
        walker.email = request_body["email"]
        walker.password = request_body["password"]
        walker.address = request_body["address"]
        walker.phone_number = request_body["phone_number"]
        walker.description = request_body["description"]
        walker.price_low = request_body["price_low"]
        walker.price_high = request_body["price_high"]
        walker.average_rate = request_body["average_rate"]

        db.session.commit()

        response_body = {"message": "Walker update",
                         "status": "OK",
                         "response": request_body
                         }

        return response_body, 200

    if request.method == 'DELETE':

        walker = db.get_or_404(WalkerModel, id)

        db.session.delete(walker)
        db.session.commit()

        response_body = {"message": "Walker discharged",
                         "status": "OK",
                         "Walker discharged": id}

        return response_body, 200


@api.route('/reviews/', methods=['GET', 'POST'])
def handle_reviews():

    if request.method == 'GET':

        reviews = db.session.execute(
            db.select(ReviewWalkers).order_by(ReviewWalkers.id)).scalars()

        result = [item.serialize()
                  for item in reviews]

        response_body = {"message": "All reviews of the users",
                         "status": "OK",
                         "response": result}

        return response_body, 200

    if request.method == 'POST':

        request_body = request.get_json()

        review = ReviewWalkers(**request_body)

        db.session.add(review)
        db.session.commit()

        response_body = {"message": "New review add",
                         "status": "OK",
                         "response": request_body}

        return response_body, 200


@api.route('/favorites/', methods=['GET', 'POST'])
def handle_favorites():

    if request.method == 'GET':

        favorites = db.session.execute(
            db.select(FavoriteWalkers).order_by(FavoriteWalkers.id)).scalars()

        result = [item.serialize() for item in favorites]

        response_body = {"message": "All reviews of the users",
                         "status": "OK",
                         "response": result}

        return response_body, 200

    if request.method == 'POST':

        request_body = request.get_json()

        favorite = FavoriteWalkers(**request_body)

        db.session.add(favorite)
        db.session.commit()

        response_body = {"message": "New favorite add",
                         "status": "OK",
                         "response": request_body}

        return response_body, 200


@api.route('/groomers', methods=['POST', 'GET'])
def handle_get_groomers(id):
    if request.method == 'GET':
        groomers: db.session.execute(
            db.select(GroomerModel).order_by(GroomerModel.id)).scalars()
        results = [item.serialize() for item in groomers]
        response_body = {"message": " these are the Groomer endpoints",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if request.method == 'POST':
        request_body = request.get_json()
        groomers = GroomerModel(** request_body)
        db.session.add(groomer)
        db.session.commit()
        print(request_body)
        response_body = {"message": "Adding new groomer",
                         "status": "ok",
                         "new_groomers": request_body}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404


@api.route('/groomers/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_groomers(id):

    if request.method == 'GET':
        groomers = db.get_or_404(GroomerModel, id)
        print(groomers)
        response_body = {"status": "ok",
                         "results": groomers.serialize()
                         }

        return response_body, 200

    if request.method == 'PUT':
        request_body = request.get_json()
        groomers = db.get_or_404(GroomerModel, id)
        groomers.name = request_body["name"]
        groomers.last_name = request_body["last name"]
        groomers.description = request_body["description"]
        groomers.email = request_body["email"]
        groomers.password = request_body["password"]
        groomers.address = request_body["address"]
        groomers.average_rate = request_body["average rate"]
        groomers.services = request_body["services"]
        groomers.price_low = request_body["price low"]
        groomers.price_high = request_body["price high"]
        groomers.call_in = request_body["call in"]
        groomers.avatar = request_body["avatar"]

        db.session.commit()

        response_body = {"message": "Update groomers",
                         "status": "ok",
                         "groomers": request_body}

        return request_body, 200

    if request.method == 'DELETE':
        groomers = db.get_or_404(GroomerModel, id)
        db.session.delete(groomers)
        db.session.commit()
        response_body = {"message": "DELETE groomers",
                         "status": "ok",
                         "groomers_deleting": id}

        return response_body, 200


@api.route('/groomers/favorites', methods=['POST', 'GET'])
def handle_get_groomers_favorites():
    if request.method == 'GET':
        groomersFavorites: db.session.execute(db.select(
            GroomerFavoritesModel).order_by(GroomerFavoritesModel.name)).scalars()
        results = [item.serialize() for item in groomersFavorites]
        response_body = {"message": " these are the groomer favorites endpoints",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if request.method == 'POST':
        request_body = request.get_json()
        groomersFavorites = GroomerFavoritesModel(** request_body)
        db.session.add(groomersFavorites)
        db.session.commit()
        print(request_body)
        response_body = {"message": "Adding new groomers favorites",
                         "status": "ok",
                         "new_groomers_favorites": request_body}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404


@api.route('/groomers/reviews', methods=['POST', 'GET'])
def handle_get_groomers_reviews():
    if request.method == 'GET':
        groomersreviews: db.session.execute(
            db.select(GroomerReviews).order_by(GroomerReviews.title)).scalars()
        results = [item.serialize() for item in groomersreviews]
        response_body = {"message": " these are the groomer reviews endpoints",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if request.method == 'POST':
        request_body = request.get_json()
        groomersreviews = GroomerReviews(** request_body)
        db.session.add(groomersreviews)
        db.session.commit()
        print(request_body)
        response_body = {"message": "Adding new groomers reviews",
                         "status": "ok",
                         "new_groomers_reviews": request_body}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

