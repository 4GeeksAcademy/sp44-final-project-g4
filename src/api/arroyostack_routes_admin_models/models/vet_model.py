from api.db import db

class VetModel(db.Model):
    __tablename__ = "vet"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (
        128 - 32), primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    phone_number = db.Column(db.String(150), unique=True, nullable=False)
    company_name = db.Column(db.String(100), unique=False, nullable=True)
    description = db.Column(db.String(2000), unique=False, nullable=False)
    avatar = db.Column(db.String(2000), unique=True, nullable=False)
    services = db.Column(db.String(2000), unique=False, nullable=True)
    price_low = db.Column(db.Integer, unique=False, nullable=False)
    price_high = db.Column(db.Integer, unique=False, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Vet {self.id} {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "company_name": self.company_name,
            "description": self.description,
            "avatar": self.avatar,
            "services": self.services,
            "price_low": self.price_low,
            "price_high": self.price_high,
            "vet_favorite": self.vet_favorite,
            "vet_review": self.vet_review,
        }
