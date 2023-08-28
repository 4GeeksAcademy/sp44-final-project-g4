from api.db import db

class GroomerModel(db.Model):
    __tablename__ = "groomer"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(70), unique=False, nullable=False)
    last_name = db.Column(db.String(70), unique=False, nullable=False)
    company_name = db.Column(db.String(100), unique=True, nullable=True)
    description = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone_number = db.Column(db.Integer(10), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    average_rate = db.Column(db.String(10), unique=False, nullable=True)
    services = db.Column(db.String(100), unique=False, nullable=False)
    price_low = db.Column(db.Integer(7), unique=False, nullable=False)
    price_high = db.Column(db.Integer(7), unique=False, nullable=True)
    call_in = db.Column(db.Boolean(), unique=False, nullable=False)
    avatar = db.Column(db.String(120), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    groomer_favorites = db.relationship("GroomerFavoritesModel", back_populates="groomer")
    groomer_reviews = db.relationship("GroomerReviewsModel", back_populates="groomer")


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
            "avatar": self.avatar
        }