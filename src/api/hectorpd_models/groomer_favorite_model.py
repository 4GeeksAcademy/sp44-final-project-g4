from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

db = SQLAlchemy()


class GroomerFavoritesModel(db.Model):
    __tablename__ = "groomerfavorites"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="groomerfavorites")
    groomer_id = db.Column(db.Integer, db.ForeignKey('groomer.id'))
    groomer = db.relationship("GroomerModel", back_populates="groomerfavorites")
    
    def __repr__(self):
        return f'<groomerfavorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "user_id": self.user_id,
            "groomer_id": self.groomer_id    
        }