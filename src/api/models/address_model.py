from db import db

class Address(db.Model):
    __table_name__="AddressModel"
    id = db.Column(db.Integer, primary_key=True) 
    street = db.Column(db.String(20), unique=False, nullable=False)
    number = db.Column(db.Integer(5), unique=False, nullable=False)
    zip_code = db.Column(db.Integer(6), unique=False, nullable=False)
    user.id = db.Column(db.Integer, db.ForeignKey("user.id"), unique=True, nullable=False)
    #One to many
    user = db.relationship("UserModel", back_populates="AddressModel")