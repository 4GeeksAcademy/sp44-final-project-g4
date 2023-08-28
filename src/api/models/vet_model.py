from api.db import db

class VetModel(db.Model):
    __tablename__ = "vet"
    id = db.Column(db.Integer, primarykey=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    company_name = db.Column(db.String(100), unique=False, nullable=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    description =  db.Column(db.String(2000), unique=False, nullable=False)
    phone_number = db.Column(db.String(150), unique=True, nullable=False)
    services =  db.Column(db.String(2000), unique=False, nullable=True)
    price_low = db.Column(db.Integer, unique=False, nullable=False)
    price_high = db.Column(db.Integer, unique=False, nullable=True)
    average_rate = db.Column(db.Float, unique=False, nullable=True )
    vet_favorite = db.relationship("VetFavoriteModel", back_populates="vet")
    vet_review = db.relationship("VetReviewModel", back_populates="vet")