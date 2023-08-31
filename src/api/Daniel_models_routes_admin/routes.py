from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, WalkerModel, ReviewWalkers, FavoriteWalkers
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


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
