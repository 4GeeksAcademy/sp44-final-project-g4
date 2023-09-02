from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

db = SQLAlchemy()


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