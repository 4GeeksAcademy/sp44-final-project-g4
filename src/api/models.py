from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid

db = SQLAlchemy()

ma = Marshmallow()


# USER MODEL
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.BigInteger, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=True)
    phone_number = db.Column(db.String(150), unique=True, nullable=True)
    avatar = db.Column(db.String(2000), unique=False)
    is_admin = db.Column(db.Boolean, default=False)
    is_active = db.Column(db.Boolean(), default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    password = db.Column(db.String(1000), unique=False, nullable=False)


    def __repr__(self):
        return f'<User {self.id} {self.email}>'



class VetModel(db.Model):
    __tablename__ = "vet"
    id = db.Column(db.BigInteger, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    phone_number = db.Column(db.String(150), unique=True, nullable=True)
    company_name = db.Column(db.String(100), unique=False, nullable=True)
    address = db.Column(db.String(500), nullable=True)
    zip_code = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(2000), unique=False)
    avatar = db.Column(db.String(2000), unique=False, nullable=True)
    services = db.Column(db.String(2000), unique=False, nullable=True)
    price_low = db.Column(db.Integer, unique=False, nullable=False)
    price_high = db.Column(db.Integer, unique=False, nullable=True, default=None)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    password = db.Column(db.String(1000), unique=False, nullable=False)
    call_in = db.Column(db.Boolean(), nullable=True)
    
    


    def __repr__(self):
        return f'<Vet {self.id} {self.email}>'

    
class VetReviewModel(db.Model):
    __tablename__ = "vet_review"
    id = db.Column(db.BigInteger, primary_key=True)
    title = db.Column(db.String(300), unique=False, nullable=False)
    body = db.Column(db.String(3000), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    rate_enum = db.Enum('1', '2', '3', '4', '5', name='rate_enum')
    rate = db.Column(rate_enum, nullable=False)
    # Relations
    user_id = db.Column(
        db.BigInteger, db.ForeignKey("user.id"), unique=False, nullable=False
    )
    user = db.relationship("User")
    vet_id = db.Column(
        db.BigInteger, db.ForeignKey("vet.id"), unique=False, nullable=False
    )
    # One to many
    vet = db.relationship("VetModel")

    def __repr__(self):
        return f'<Review: {self.id} >'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "date": self.created_at,
            "rate": self.rate,
            "user_id": self.user_id,
            "vet_id": self.vet_id,
        }
    
class VetFavoriteModel(db.Model):
    __tablename__ = "vet_favorite"
    id = db.Column(db.BigInteger, primary_key=True)
    user_id = db.Column(db.BigInteger, db.ForeignKey(
        'user.id'), unique=False, nullable=False)
    vet_id = db.Column(
        db.BigInteger, db.ForeignKey("vet.id"), unique=False, nullable=False
    )
    # One to many
    vet = db.relationship("VetModel")
    user = db.relationship("User")

    def __repr__(self):
        return f'<Favorite Vet {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "vet_id": self.vet_id,
        }


class GroomerModel(db.Model):
    __tablename__ = "groomer"
    id = db.Column(db.BigInteger, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    phone_number = db.Column(db.String(150), unique=True, nullable=True)
    company_name = db.Column(db.String(100), unique=False, nullable=True)
    address = db.Column(db.String(500), nullable=True)
    zip_code = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(2000), unique=False)
    avatar = db.Column(db.String(2000), unique=False, nullable=True)
    services = db.Column(db.String(2000), unique=False, nullable=True)
    price_low = db.Column(db.Integer, unique=False, nullable=False)
    price_high = db.Column(db.Integer, unique=False, nullable=True, default=None)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    password = db.Column(db.String(1000), unique=False, nullable=False)
    call_in = db.Column(db.Boolean(), nullable=True)
   

    def __repr__(self):
        return f'<groomer {self.name} {self.last_name} {self.company_name}>'


class GroomerReviewsModel(db.Model):
    __tablename__ = "groomerreviews"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=True)
    body = db.Column(db.String(200), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    rate = db.Column(db.String(80), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User")
    groomer_id = db.Column(db.Integer, db.ForeignKey('groomer.id'))
    groomer = db.relationship("GroomerModel")
    
    def __repr__(self):
        return f'<groomerreviews {self.id}>'
    
    def serialize(self):
        return {
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "company_name": self.company_name,
            "description": self.description,
            "avatar": self.avatar,
            "services": self.services,
            "price_low": self.price_low,
            "price_high": self.price_high,
        }
    

class GroomerFavoritesModel(db.Model):
    __tablename__ = "groomerfavorites"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User")
    groomer_id = db.Column(db.Integer, db.ForeignKey('groomer.id'))
    groomer = db.relationship("GroomerModel")
    
    def __repr__(self):
        return f'<groomerfavorites {self.id}>'
    
    def serialize(self):
        return {
            "title": self.title,
            "body": self.body,
            "date": self.created_at,
            "rate": self.rate,
            "user_id": self.user_id,
            "vet_id": self.vet_id,
        }


class WalkerModel(db.Model):
    __tablename__ = "walker"
    id = db.Column(db.BigInteger, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    phone_number = db.Column(db.String(150), unique=True, nullable=True)
    company_name = db.Column(db.String(100), unique=False, nullable=True)
    address = db.Column(db.String(500), nullable=True)
    zip_code = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(2000), unique=False)
    avatar = db.Column(db.String(2000), unique=False, nullable=True)
    services = db.Column(db.String(2000), unique=False, nullable=True)
    price_low = db.Column(db.Integer, unique=False, nullable=False)
    price_high = db.Column(db.Integer, unique=False, nullable=True, default=None)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    password = db.Column(db.String(1000), unique=False, nullable=False)
    call_in = db.Column(db.Boolean(), nullable=True)

    def __repr__(self):
        return f'<Walker {self.name} {self.surname}'
    

class PostModel(db.Model):
    __tablename__ = "post"
    id = db.Column(db.BigInteger, primary_key=True)
    title = db.Column(db.String(300), unique=False, nullable=False)
    body = db.Column(db.String(3000), unique=False, nullable=False)
    image = db.Column(db.String(3000), unique=False, nullable=False)
    category_enum = db.Enum('Salud', 'Bienestar',
                            'Belleza', name='category_enum')
    author = db.Column(db.String(200), unique=False, nullable=False)
    category = db.Column(category_enum, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Post: {self.id} {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "Name": self.name,
            "Surname": self.surname,
            "Email": self.email,
            "Address": self.address,
            "Phone Number": self.phone_number,
            "Description": self.description,
            "Price low": self.price_low,
            "Price high": self.price_high
        }
    
class ReviewWalkers(db.Model):
    __tablename__ = "review_walkers"
    id = db.Column(db.BigInteger, primary_key=True)
    body = db.Column(db.String(250))
    date = db.Column(db.DateTime, default=datetime.utcnow)
    title = db.Column(db.String(100))
    rate = db.Column(db.Integer)
    walker_id = db.Column(db.BigInteger, db.ForeignKey("walker.id"))
    walker = db.relationship("WalkerModel")
    user_id = db.Column(db.BigInteger, db.ForeignKey("user.id"))
    user = db.relationship("User")

    def __repr__(self):
        return '<Review %r' % {self.id}

    def serialize(self):
        return {"id": self.id,
                "Body": self.body,
                "Date": self.date,
                "Title": self.title,
                "Rate": self.rate,
                "Walker ID": self.walker_id,
                "User ID": self.user_id
                }
    
class FavoriteWalkers(db.Model):
    __tablename__ = "favorite_walkers"
    id = db.Column(db.BigInteger, primary_key=True)
    user_id = db.Column(db.BigInteger, db.ForeignKey("user.id"))
    user = db.relationship("User")
    walker_id = db.Column(db.BigInteger, db.ForeignKey("walker.id"))
    walker = db.relationship("WalkerModel")

    def __repr__(self):
        return '<Favorite Walkers %r' % {self.id}

    def serialize(self):
        return {"id": self.id,
                "User ID": self.user_id,
                "Walker ID": self.walker_id,
                "User ID": self.user_id,
                "Walker ID": self.walker_id
                }
    
    def serialize(self):
        return {
            "title": self.title,
            "body": self.body,
            "date": self.date,
            "image": self.image,
            "category": self.category,
            "author": self.author,
            "category": self.category
        }
    

class PetModel(db.Model):
    id = db.Column(db.BigInteger, default= uuid.uuid4().int >> (128 - 32), primary_key=True) 
    name = db.Column(db.String(50), nullable=False)
    animal_type = db.Column(db.String(50), nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    weight = db.Column(db.Float)
    size = db.Column(db.String(50))
    user_id = db.Column(db.BigInteger, db.ForeignKey('user.id'), nullable=False)
    picture = db.Column(db.String(255))
    user = db.relationship("User")

    def __repr__(self):
        return f'<Pet {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "animal_type": self.animal_type,
            "breed": self.breed,
            "weight": self.weight,
            "size": self.size,
            "user_id": self.user_id,
            "picture": self.picture
        }