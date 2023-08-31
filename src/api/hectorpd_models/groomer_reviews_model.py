from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

db = SQLAlchemy()


class GroomerReviewsModel(db.Model):
    __tablename__ = "groomerreviews"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=True)
    body = db.Column(db.String(200), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    rate = db.Column(db.String(80), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="groomerreviews")
    groomer_id = db.Column(db.Integer, db.ForeignKey('groomer.id'))
    groomer = db.relationship("GroomerModel", back_populates="groomerreviews")
    
    def __repr__(self):
        return f'<groomerreviews {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "groomer_id": self.groomer_id,
            "title": self.title,
            "body": self.body,
            "created_at": self.created_at,
            "rate": self.rate
        }