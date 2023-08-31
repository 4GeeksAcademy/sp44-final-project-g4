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
