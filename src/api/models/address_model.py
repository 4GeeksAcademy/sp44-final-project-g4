from flask_sqlalchemy import SQLAlchemy

from datetime import datetime
import uuid

db = SQLAlchemy()

class Address(db.Model):
    __table_name__ = "AddressModel"
    id = db.Column(db.BigInteger, default= uuid.uuid4().int >> (128 - 32), primary_key=True) 
    street = db.Column(db.String(20), unique=False, nullable=False)
    number = db.Column(db.Integer, unique=False, nullable=False)
    zip_code = db.Column(db.Integer, unique=False, nullable=False)
    user_id = db.Column(db.BigInteger, db.ForeignKey("user.id"), unique=True, nullable=False)
    #One to many
    user = db.relationship("User", back_populates="Address")

    def __repr__(self):
        return f'<Address {self.zip_code}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "street": self.street,
            "number": self.number,
            "zip_code": self.zip_code,
            "user_id": self.user.id, 
        }
