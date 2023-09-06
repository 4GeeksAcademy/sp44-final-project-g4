"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, VetFavoriteModel, VetReviewModel, PostModel
from api.utils import generate_sitemap, APIException
# from flask.views import MethodView
# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


# User endpoints
@api.route('/signup', methods=['POST'])
def signup():
    # Here we need to improve the function so only emails in admin table can check "isAdmin: True".
    # Also validations for email password and phone number.
    request_body = request.json

    if User.query.filter_by(email=request_body['email']).first():
        return jsonify({'message': 'Email already in use'}), 409 
        

    if 'password' not in request_body or not request_body['password']:
        return jsonify({'message': 'Password is required'}), 400


    user = User( name=request_body["name"],
                last_name=request_body["last_name"],
                email = request_body["email"],
                password = request_body["password"],
                avatar = request_body["avatar"],
                phone_number = request_body["phone_number"]
    )


    db.session.add(user)
    db.session.commit()
    response_body = {"message": "New User Successfully Created",
                     "status": "ok",
                     "user": request_body}
    
    if response_body:
        return response_body, 200
    else: 
        return "User could not be created"
    

@api.route('/users', methods=['GET']) 
def get_all_users():
    if request.method == 'GET' :  
        users = db.session.execute(db.select(User).order_by(User.name)).scalars()
        results = [item.serialize() for item in users]
        response_body = {"message": "all users",
                         "results": results,
                         "status": "ok"}

        if response_body:
            return response_body, 200
        else:
            return "Not Found", 404
        

@api.route('/user/<int:id>', methods=[ 'GET'])
def get_user(id):

    if request.method == 'GET':
        user = db.get_or_404(User, id)
        response_body = {"status": "ok",
                         "results": user.serialize()}

    if response_body:
        return response_body, 200
    else:
        return "Not Found", 404

@api.route('/users/<int:user_id>', methods=['DELETE']) 
def delete_user(user_id):
    # Note: here we need to improve the deletion function. Only an admin can delete any user, 
    # and only a logged user can delete (calcell) hes own account.
    user_to_delete = db.get_or_404(User, user_id)

    try:
        db.session.delete(user_to_delete)
        db.session.commit()
        return "User Deleted Successfully", 200
    except:
        return "User not found", 404
    
 
@api.route('/favorite/<int:user_id>', methods=['POST', 'GET'])
def get_user_vet_favorites(user_id):

    favorite = db.session.execute(db.select(VetFavoriteModel).order_by(VetFavoriteModel.id)).scalars()
    response = [item.serialize() for item in favorite if item.user_id == user_id]
    body = {"message": f'Favorite for User_id: {user_id}',
                         "results": response,
                         "status": "ok"}

  
    if body:
        return body, 200
    else:
        return "Not Found", 404
    

@api.route('/review/<int:user_id>', methods=['POST', 'GET'])
def get_user_vet_reviews(user_id):

    if request.method == 'GET':
        # THIS ONLY BRINGS ONE
        review = db.session.execute(db.select(VetReviewModel).order_by(VetReviewModel.id)).scalars()
        response = [item.serialize() for item in review if item.user_id == user_id]
        response_body = {"message": f'Reviews for User_id: {user_id}',
                         "results": response,
                         "status": "ok"}
  
    if response_body:
        return response_body, 200
    else:
        return "Not Found", 404
    

@api.route('/posts', methods=['POST', 'GET']) 
def get_posts():
    if request.method == 'GET' :  
        posts = db.session.execute(db.select(PostModel).order_by(PostModel.date)).scalars()
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




    




    