from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=True)
    phone_number = db.Column(db.String(150), unique=True)
    avatar = db.Column(db.String(2000), unique=False)
    password = db.Column(db.String(100), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_admin = db.Column(db.Boolean, default=False)
    is_active = db.Column(db.Boolean(), default=False)


    def __repr__(self):
        return f'<User {self.id} {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "avatar": self.avatar,
            "is_active": self.is_active,
            "is_admin": self.is_admin,
            "created_at": self.created_at
        }

class GroomerModel(db.Model):
    __tablename__ = "groomer"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    name = db.Column(db.String(70),  nullable=False)
    last_name = db.Column(db.String(70), nullable=False)
    company_name = db.Column(db.String(100), unique=True, nullable=True)
    description = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80),nullable=False)
    phone_number = db.Column(db.String(10), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    average_rate = db.Column(db.String(10), nullable=True)
    services = db.Column(db.String(100), nullable=False)
    price_low = db.Column(db.Integer, nullable=False)
    price_high = db.Column(db.Integer, nullable=True)
    call_in = db.Column(db.Boolean(), nullable=False)
    avatar = db.Column(db.String(120), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_active = db.Column(db.Boolean(), nullable=False)

    def __repr__(self):
        return f'<groomer {self.name} {self.last_name} {self.company_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "company_name": self.company_name,
            "description": self.description,
            "email": self.email,
            "phone_number": self.phone_number,
            "address": self.address,
            "average_rate": self.average_rate,
            "services": self.services,
            "price_low": self.price_low,
            "price_high": self.price_high,
            "call_in": self.call_in,
            "avatar": self.avatar,
            "created_at": self.created_at,
            "is_active": self.is_active
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
            "id": self.id,
            "created_at": self.created_at,
            "user_id": self.user_id,
            "groomer_id": self.groomer_id    
        }


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
            "id": self.id,
            "user_id": self.user_id,
            "groomer_id": self.groomer_id,
            "created_at": self.created_at,
            "title": self.title,
            "body": self.body,
            "date": self.date,
            "rate": self.rate
        }