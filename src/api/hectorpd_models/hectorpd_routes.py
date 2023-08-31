"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, GroomerModel, GroomerFavoritesModel, GroomerReviewsModel
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/groomers', methods=['POST', 'GET'])
def handle_get_groomers(id):
    if request.method == 'GET':
        groomers: db.session.execute(db.select(GroomerModel).order_by(GroomerModel.id)).scalars()
        results = [item.serialize() for item in groomers]
        response_body = {"message": " these are the Groomer endpoints",
                        "results": results,
                        "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if request.method == 'POST' :
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


@api.route('/groomers/<int:id>', methods= ['GET', 'PUT', 'DELETE'])
def handle_groomers(id):

    if request.method == 'GET' :
        groomers = db.get_or_404(GroomerModel, id)
        print(groomers)
        response_body = {"status": "ok",
                        "results": groomers.serialize()
                        }
        
        return response_body, 200
        
    if request.method == 'PUT' :
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
        groomers.avatar =request_body["avatar"]
    
        db.session.commit()

        response_body = {"message": "Update groomers",
                        "status": "ok",
                        "groomers": request_body}
                
        return request_body , 200

    if request.method == 'DELETE' :
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
        groomersFavorites: db.session.execute(db.select(GroomerFavoritesModel).order_by(GroomerFavoritesModel.name)).scalars()
        results = [item.serialize() for item in groomersFavorites]
        response_body = {"message": " these are the groomer favorites endpoints",
                        "results": results,
                        "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if request.method == 'POST' :
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
        groomersreviews: db.session.execute(db.select(GroomerReviews).order_by(GroomerReviews.title)).scalars()
        results = [item.serialize() for item in groomersreviews]
        response_body = {"message": " these are the groomer reviews endpoints",
                        "results": results,
                        "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404

    if request.method == 'POST' :
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