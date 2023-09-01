"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, VetFavoriteModel, VetReviewModel, PostModel, VetModel
from api.utils import generate_sitemap, APIException
# from flask.views import MethodView
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


# @api.route('/user/', methods=['POST'])
# def create_user():
#     request_body = request.get_json()


#     user = User(name=request_body["name"],
#                 last_name=request_body["last_name"],
#                 email = request_body["email"],
#                 password = request_body["password"],
#                 avatar = request_body["avatar"],
#                 phone_number = request_body["phone_number"]
#                 )

#     db.session.add(user)
#     db.session.commit()
#     response_body = {"message": "New User Successfully Created",
#                      "status": "ok",
#                      "user": request_body}

#     if response_body:
#         return response_body, 200
#     else:
#         return "User could not be created"
