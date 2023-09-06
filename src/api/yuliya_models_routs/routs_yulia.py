"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import bcrypt
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, VetFavoriteModel, VetReviewModel, PostModel, VetModel, WalkerModel, ReviewWalkers, FavoriteWalkers, GroomerModel, GroomerFavoritesModel, GroomerReviewsModel, PetModel, AddressModel


from api.utils import generate_sitemap, APIException
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

# Endponit para crear nuevos usuarios y nuevos profesionales (vet/groomer/walker)
@api.route('/signup/<string:user_type>', methods=['POST'])
def signup(user_type):
    # Here we need to improve the function so only emails in admin table can check "isAdmin: True".
    # Also validations for email password and phone number.
    request_body = request.json

    if user_type == "user":
        # password = request.json["password"]
        # hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        # request_body["password"] = hashed

        user = User(**request_body) 

        db.session.add(user)
        db.session.commit()

        response_body = {"message": "New User Successfully Created",
                         "status": "ok",
                         "user": request_body["email"]}

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
        
    if user_type == "groomer":
        groomer = GroomerModel(**request_body)

        db.session.add(groomer)
        db.session.commit()

        response_body = {"message": "New Groomer Successfully Created",
                         "status": "ok",
                         "user": request_body}

        if response_body:
            return response_body, 200
        else:
            return "Groomer could not be created"

    
    if user_type == "walker":
        walker = WalkerModel(**request_body)

        db.session.add(walker)
        db.session.commit()

        response_body = {"message": "New Walker Successfully Created",
                         "status": "ok",
                         "user": request_body}

        if response_body:
            return response_body, 200
        else:
            return "Walker could not be created"

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

@api.route('/users', methods=['GET'])
#@jwt_required()
def get_all_users():
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



# EndPoint para optener todos los profesionales por grupo (vet/groomer/walker) ----> TERMINADO --->daniel
@api.route('/professional/<string:professional_type>', methods=['GET'])
def get_all_proffesionals(professional_type):
    if professional_type == 'vet':
        vets = db.session.execute(
            db.select(VetModel).order_by(VetModel.name)).scalars()
        results = [item.serialize() for item in vets]
        response_body = {"message": "all Vets",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404
    
    if professional_type == 'groomer':
        groomers = db.session.execute(
            db.select(GroomerModel).order_by(GroomerModel.name)).scalars()
        results = [item.serialize() for item in groomers]
        response_body = {"message": "all Groomers",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404
        
    if professional_type == 'walker':
        walkers = db.session.execute(
            db.select(WalkerModel).order_by(WalkerModel.name)).scalars()
        results = [item.serialize() for item in walkers]
        response_body = {"message": "all Groomers",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404


# EndPoint para optener un profesional a través de su ID ----> TERMINADO (Faltaría solo resolver si el acceso a user será solo para el ADMIN) --->daniel
@api.route('/professional/<int:id>/<string:professional_type>', methods=['GET'])
def get_single_professional(id, professional_type):
    #Admin route?

    # if user_type == "user":
    #     user = db.get_or_404(User, id)
    #     response_body = {"status": "ok",
    #                      "results": user.serialize()}

    #     if response_body:
    #         return response_body, 200
    #     else:
    #         return "Not Found", 404

    if professional_type == "vet":
        vet = db.get_or_404(VetModel, id)
        response_body = {"status": "ok",
                         "results": vet.serialize()}

        if response_body:
            return response_body, 200
        else:
            return {"message": "Vet Id Not Found",
                    "status": 404}
        
    if professional_type == "groomer":
        groomer = db.get_or_404(GroomerModel, id)
        response_body = {"status": "ok",
                         "results": groomer.serialize()}

        if response_body:
            return response_body, 200
        else:
            return {"message": "Groomer Id Not Found",
                    "status": 404}
        
    if professional_type == "walker":
        walker = db.get_or_404(WalkerModel, id)
        response_body = {"status": "ok",
                         "results": walker.serialize()}

        if response_body:
            return response_body, 200
        else:
            return {"message": "Walker Id Not Found",
                    "status": 404}


# Incluidos los 3 profesionales en GET y PUT y DELETE
@api.route('/professional/<int:user_id>/<string:user_type>', methods=['GET', 'PUT', 'DELETE'])
def handle_proffesionals(user_type, user_id):
    if user_type == 'vet':
        if request.method == 'GET':
            vets = db.get_or_404(VetModel, id)
            print(vets)
            response_body = {"message": "vets filtered by ID",
                            "status": "ok",
                            "results": vets.serialize()}

            return response_body, 200

        if request.method == 'PUT':
            request_body = request.get_json()
            vets = db.get_or_404(VetModel, id)
            vets.name = request_body["name"]
            vets.last_name = request_body["last name"]
            vets.description = request_body["description"]
            vets.email = request_body["email"]
            vets.password = request_body["password"]
            vets.company_name = request_body["company name"]
            vets.average_rate = request_body["average rate"]
            vets.services = request_body["services"]
            vets.price_low = request_body["price low"]
            vets.price_high = request_body["price high"]
            vets.call_in = request_body["call in"]
            vets.avatar = request_body["avatar"]
            vets.phone_number = request_body["phone number"]

            db.session.commit()

            response_body = {"message": "Update vets",
                            "status": "ok",
                            "vets": request_body}

            return request_body, 200

        if request.method == 'DELETE':
            vets = db.get_or_404(VetModel, id)
            db.session.delete(vets)
            db.session.commit()
            response_body = {"message": "DELETE vets",
                            "status": "ok",
                            "vets_deleting": id}

            return response_body, 200


    if user_type == 'groomer':
        if request.method == 'GET':
            groomers = db.get_or_404(GroomerModel, id)
            print(groomers)
            response_body = {"message": "Groomers filtered by ID",
                        "status": "ok",
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
            groomers.phone_number = request_body["phone number"]

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


    if user_type == 'walker':
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
                            "response": request_body}

            return response_body, 200

        if request.method == 'DELETE':
            walker = db.get_or_404(WalkerModel, id)
            db.session.delete(walker)
            db.session.commit()
            response_body = {"message": "Walker discharged",
                            "status": "OK",
                            "Walker discharged": id}

            return response_body, 200


# EndPoint para optener y crear los Posts
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


# Incluidos los 3 profesionales en favoritos.
@api.route('/favorite/<int:user_id>/<string:user_type>', methods=['POST', 'GET'])
@jwt_required()
def get_user_favorites(user_id, user_type):

    if user_type == "vet":
        if request.method == 'GET':
            favorites = db.session.execute(db.select(VetFavoriteModel).order_by(VetFavoriteModel.id)).scalars()
            result = [item.serialize() for item in favorites]
            response_body = {"message": "these are the vet favorites endpoints",
                            "status": "OK",
                            "response": result}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404

        if request.method == 'POST':
            request_body = request.get_json()
            vet_favorites = VetFavoriteModel(**request_body)
            db.session.add(VetFavoriteModel)
            db.session.commit()

            response_body = {"message": "Adding new vet favorites",
                            "status": "OK",
                            "response": request_body}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404

    if user_type == "walker":
        if request.method == 'GET':
            favorites = db.session.execute(db.select(FavoriteWalkers).order_by(FavoriteWalkers.id)).scalars()
            result = [item.serialize() for item in favorites]
            response_body = {"message": "these are the walker favorites endpoints",
                            "status": "OK",
                            "response": result}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404

        if request.method == 'POST':
            request_body = request.get_json()
            favorite = FavoriteWalkers(**request_body)
            db.session.add(favorite)
            db.session.commit()

            response_body = {"message": "Adding new walker favorites",
                            "status": "OK",
                            "response": request_body}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404
        
    if user_type == "groomer":
        if request.method == 'GET':
            groomersFavorites: db.session.execute(db.select(
                GroomerFavoritesModel).order_by(GroomerFavoritesModel.name)).scalars()
            results = [item.serialize() for item in groomersFavorites]
            response_body = {"message": "these are the groomer favorites endpoints",
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


# Incluidos los 3 profesionales en reviews
@api.route('/review/<int:user_id>/<string:user_type>', methods=['POST', 'GET'])
# @jwt_required()
# This is Ok
def get_user_reviews(user_id, user_type):
    if user_type == "vet":
        if request.method == 'GET':
            review = db.session.execute(
                db.select(VetReviewModel).order_by(VetReviewModel.id)).scalars()
            result = [item.serialize()
                        for item in review if item.vet_id == user_id]
            response_body = {"message": 'All reviews of the users',
                            "results": result,
                            "status": "ok"}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404

        if request.method == 'POST':
            request_body = request.get_json()
            review = VetReviewModel(**request_body)
            db.session.add(review)
            db.session.commit()
            response_body = {"message": "New review add",
                            "status": "OK",
                            "response": request_body}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404

    if user_type == "walker":
        if request.method == 'GET':

            review = db.session.execute(
                db.select(ReviewWalkers).order_by(ReviewWalkers.id)).scalars()
            result = [item.serialize()
                        for item in review if item.walker_id == user_id]
            response_body = {"message": "All reviews of the users",
                            "status": "OK",
                            "response": result}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404

        if request.method == 'POST':
            request_body = request.get_json()
            review = ReviewWalkers(**request_body)
            db.session.add(review)
            db.session.commit()
            response_body = {"message": "New review add",
                            "status": "OK",
                            "response": request_body}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404
        
    if user_type == "groomer":
        if request.method == 'GET':
            groomersreviews: db.session.execute(
                db.select(GroomerReviews).order_by(GroomerReviews.title)).scalars()
            results = [item.serialize() for item in groomersreviews]
            response_body = {"message": "All reviews of the users",
                            "results": results,
                            "status": "ok"}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404

        if request.method == 'POST':
            request_body = request.get_json()
            groomersreviews = GroomerReviewsModel(** request_body)
            db.session.add(groomersreviews)
            db.session.commit()
            print(request_body)
            response_body = {"message": "New review add",
                            "status": "ok",
                            "new_groomers_reviews": request_body}

            if response_body:
                return response_body, 200
            else:
                return "Not Found", 404
            
@api.route 
