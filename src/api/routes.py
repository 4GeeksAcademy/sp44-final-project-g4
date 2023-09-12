"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import uuid
import bcrypt
from marshmallow import ValidationError
from flask import session as login_session, abort

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, VetFavoriteModel, VetReviewModel, PostModel, VetModel, WalkerModel, ReviewWalkers, FavoriteWalkers, GroomerModel, GroomerFavoritesModel, GroomerReviewsModel
from api.user import UserSchema, VetSchema, GroomerSchema, WalkerSchema
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_access_token
from geopy.geocoders import Nominatim

api = Blueprint('api', __name__)


@api.errorhandler(ValidationError)
def handle_marshmallow_error(e):
    return {"msg": jsonify(e.messages),
            "code": 400}
# Endponit para crear nuevos usuarios y nuevos profecionales (vet/groomer/walker)


@api.route('/signup/<string:user_type>', methods=['POST'])
def signup(user_type):
    request_body = request.json
    email = request_body["email"]
    

    if user_type == 'user':
        schema = UserSchema()
        validated_data = schema.load(request.json)
    if user_type == 'vet':
        schema = VetSchema()
        validated_data = schema.load(request.json)
    if user_type == 'groomer':
        schema = GroomerSchema()
        validated_data = schema.load(request.json)
    if user_type == 'walker':
        schema = WalkerSchema()
        validated_data = schema.load(request.json)

    # Generate id
    request_body["id"] = uuid.uuid4().int >> (128 - 32)  # Ask mentor Hector.
    # Password Encryption and basic validation.
    password = request.json["password"]
    if len(password) < 8:
        return "Password must be at least 8 characters long."
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    request_body["password"] = hashed

    # Create Users and Professionals
    if user_type == "user":

        if User.query.filter(User.email == email).first():
            return {"msg": "Email already exist.",
                    "code": 501}

        user = User(**request_body)
        user.password = hashed.decode('utf-8')

        db.session.add(user)
        db.session.commit()

        response_body = {"message": "New User Successfully Created",
                         "code": 200,
                         "user": request_body["email"]}

        return response_body

    if user_type == "vet":
        phone_number = request_body["phone_number"]
        if VetModel.query.filter(VetModel.email == email).first():
            return {"msg": "Email already exist.......",
                    "code": 501}
        if VetModel.query.filter(VetModel.phone_number == phone_number).first():
            return {"msg": "Phone number already exist.",
                    "code": 501}
        
        address_vet =  request_body["address"]
        geolocator = Nominatim(user_agent="the_addres_vet")
        location = geolocator.geocode(address_vet)

        latitude = location.latitude
        longitude = location.longitude
        request_body["latitude"] = latitude
        request_body["longitude"] = longitude

        vet = VetModel(**request_body)
        vet.password = hashed.decode('utf-8')

        db.session.add(vet)
        db.session.commit()

        response_body = {"message": "New Vet Successfully Created",
                         "status": 200,
                         "user": request_body["email"],
                         "latitud": request_body["latitude"],
                         "logitud": request_body["longitude"]}

        return response_body

    if user_type == "groomer":
        phone_number = request_body["phone_number"]
        if GroomerModel.query.filter(GroomerModel.email == email).first():
            return {"msg": "Email already exist.......",
                    "code": 501}
        if GroomerModel.query.filter(GroomerModel.phone_number == phone_number).first():
            return {"msg": "Phone number already exist.",
                    "code": 501}
            
        address_groomer =  request_body["address"]
        geolocator = Nominatim(user_agent="the_addres_groomer")
        location = geolocator.geocode(address_groomer)

        latitude = location.latitude
        longitude = location.longitude
        request_body["latitude"] = latitude
        request_body["longitude"] = longitude

        groomer = GroomerModel(**request_body)
        groomer.password = hashed.decode('utf-8')

        db.session.add(groomer)
        db.session.commit()

        response_body = {"message": "New Groomer Successfully Created",
                         "status": 200,
                         "user": request_body["email"],
                         "latitud": request_body["latitude"],
                         "logitud": request_body["longitude"]}

        return response_body

    if user_type == "walker":
        phone_number = request_body["phone_number"]
        if WalkerModel.query.filter(WalkerModel.email == email).first():
            return {"msg": "Email already exist.......",
                    "code": 501}
        if WalkerModel.query.filter(WalkerModel.phone_number == phone_number).first():
            return {"msg": "Phone number already exist.",
                    "code": 501}
            
        address_walker =  request_body["address"]
        geolocator = Nominatim(user_agent="the_addres_walker")
        location = geolocator.geocode(address_walker)

        latitude = location.latitude
        longitude = location.longitude
        request_body["latitude"] = latitude
        request_body["longitude"] = longitude

        walker = WalkerModel(**request_body)
        walker.password = hashed.decode('utf-8')

        db.session.add(walker)
        db.session.commit()

        response_body = {"message": "New Walker Successfully Created",
                         "status": 200,
                         "user": request_body["email"],
                         "latitud": request_body["latitude"],
                         "logitud": request_body["longitude"]}

        return response_body

    return "User type not correct", 404


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if not email:
        return jsonify({"msg": "Missing Email."}), 401
    if not password:
        return jsonify({"msg": "Missing Password."}), 401

    user = User.query.filter(User.email == email).first()

    if user:
        if bcrypt.hashpw(password.encode('utf-8'), user.password.encode('utf-8')):
            access_token = create_access_token(identity=email)
            print(f'Welcome back {email}')
            return jsonify(access_token=access_token)
    else:
        message_body = {
            "msg": "User or Password Incorrect",
            "code": 501
        }
        return message_body



# Need to protect route only for admin
@api.route('/users', methods=['GET'])
@jwt_required()
def get_all_users():
    users = db.session.execute(
        db.select(User).order_by(User.name)).scalars()
    schema = UserSchema(many=True)

    if schema:
        return {"results": schema.dump(users),
                "code": 200}

    else:
        return "Not Found", 404


@api.route('/user/<int:user_id>', methods=['GET'])
@jwt_required()
def get_single_users(user_id):
    user = User.query.get_or_404(user_id)
    # if login_session[user_id] == user.id:
    schema = UserSchema()
    if schema:
        return {"user": schema.dump(user)}
    else:
        return "Not Found", 404


# EndPoint para optener todos los profesionales por grupo (vet/groomer/walker) ----> TERMINADO --->daniel
@api.route('/professional/<string:professional_type>', methods=['GET'])
def get_all_proffesionals(professional_type):
    if professional_type == 'vet':
        vets = db.session.execute(
            db.select(VetModel).order_by(VetModel.name)).scalars()
        schema = UserSchema(many=True)
        if schema:
            return {"results": schema.dump(vets),
                    "code": 200}

        else:
            return "Not Found", 404

    if professional_type == 'groomer':
        groomers = db.session.execute(
            db.select(GroomerModel).order_by(GroomerModel.name)).scalars()
        schema = GroomerSchema(many=True)

        if schema:
            return {"results": schema.dump(groomers),
                    "code": 200}

        else:
            return "Not Found", 404

    if professional_type == 'walker':
        walker = db.session.execute(
            db.select(WalkerModel).order_by(WalkerModel.name)).scalars()
        schema = WalkerModel(many=True)

        if schema:
            return {"results": schema.dump(walker),
                    "code": 200}

        else:
            return "Not Found", 404


# EndPoint para optener un profesional a través de su ID ----> TERMINADO (Faltaria solo resolver si el acceso a user será solo para el ADMIN) --->daniel
@api.route('/professional/<int:id>/<string:professional_type>', methods=['GET'])
def get_single_professional(id, professional_type):

    if professional_type == "vet":
        vet = VetModel.query.get_or_404(id)
        schema = VetSchema()

        if schema:
            return {"vet": schema.dump(vet)}

        else:
            return "Vet Not Found", 404

    if professional_type == "groomer":
        groomer = GroomerModel.query.get_or_404(id)
        schema = GroomerSchema()

        if schema:
            return {"groomer": schema.dump(groomer)}

        else:
            return "Groomer Not Found", 404

    if professional_type == "walker":
        walker = WalkerModel.query.get_or_404(id)
        schema = WalkerSchema()

        if schema:
            return {"user": schema.dump(walker)}

        else:
            return "Not Found", 404


# Incluidos los 3 profesionales en GET y PUT y DELETE
@api.route('/professional/<int:user_id>/<string:user_type>', methods=['GET', 'PUT', 'DELETE'])
def handle_proffesionals(user_type, user_id):
    if user_type == 'vet':
        if request.method == 'PUT':
            schema = VetSchema(partial=True)
            vet = VetModel.query.get_or_404(user_id)
            vet = schema.load(request.json, instance=vet)

            db.session.add(vet)
            db.session.commit()

            return {"msg": "User updated.", "vet": schema.dump(vet)}

    if user_type == 'vet':
        if request.method == 'DELETE':
            vet = VetModel.query.get_or_404(user_id)
            # if login_session[user_id] == vet.id:
            db.session.delete(vet)
            db.session.commit()

        return {"msg": "Vet Deleted."}

    if user_type == 'groomer':

        if request.method == 'PUT':
            schema = GroomerSchema(partial=True)
            groomer = GroomerModel.query.get_or_404(user_id)
            groomer = schema.load(request.json, instance=groomer)

            db.session.add(groomer)
            db.session.commit()

            return {"msg": "User updated.", "vet": schema.dump(groomer)}

        if request.method == 'DELETE':
            groomer = GroomerModel.query.get_or_404(user_id)
            # if login_session[user_id] == groomer.id:
            db.session.delete(groomer)
            db.session.commit()

        return {"msg": "Groomer Deleted"}

    if user_type == 'walker':

        if request.method == 'PUT':
            schema = WalkerSchema(partial=True)
            walker = WalkerModel.query.get_or_404(user_id)
            walker = schema.load(request.json, instance=walker)

            db.session.add(walker)
            db.session.commit()

            return {"msg": "User updated.", "vet": schema.dump(walker)}

        if request.method == 'DELETE':
            walker = VetModel.query.get_or_404(user_id)
            # if login_session['id'] == user_id:
            db.session.delete(walker)
            db.session.commit()

        return {"msg": "Walker Deleted"}


# EndPoint para optener y crear los Posts
@api.route('/posts', methods=['GET'])
def get_posts():
    if request.method == 'GET':
        posts = db.session.execute(
            db.select(PostModel).order_by(PostModel.created_at)).scalars()
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
            favorites = db.session.execute(
                db.select(VetFavoriteModel).order_by(VetFavoriteModel.id)).scalars()
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
            favorites = db.session.execute(
                db.select(FavoriteWalkers).order_by(FavoriteWalkers.id)).scalars()
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
@jwt_required()
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
                db.select(GroomerReviewsModel).order_by(GroomerReviewsModel.title)).scalars()
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
