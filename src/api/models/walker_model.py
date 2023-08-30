from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid


db = SQLAlchemy()


class WalkerModel(db.Model):
    __tablename__ = "walker"
    id =  db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    name = db.Column(db.String(20), nullable = False)
    surname = db.Column(db.String(50), nullable = False)
    email = db.Column(db.String(50), nullable = False)
    password = db.Column(db.String(50), nullable = False)
    address = db.Column(db.String(100), nullable = False)
    phone_number = db.Column(db.String(20))
    description = db.Column(db.String(250)) 
    price_low = db.Column(db.Integer, nullable = False) 
    price_high = db.Column(db.Integer)
    average_rate = db.Column(db.Integer)
    
    def __repr__(self):
        return '<Walker %r' % {self.name}, {self.surname}
    
    def serialize(self):
        return{
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

