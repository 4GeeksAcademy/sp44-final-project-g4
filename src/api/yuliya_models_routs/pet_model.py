from api.db import db

class PetModel(db.Model):
    id = db.Column(db.BigInteger, default= uuid.uuid4().int >> (128 - 32), primary_key=True) 
    name = db.Column(db.String(50), nullable=False)
    animal_type = db.Column(db.String(50), nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    weight = db.Column(db.Float)
    size = db.Column(db.String(50))
    user_id = db.Column(db.BigInteger, db.ForeignKey('user.id'), nullable=False)
    picture = db.Column(db.String(255))
    user = db.relationship("User")

    def __repr__(self):
        return f'<Pet {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "animal_type": self.animal_type,
            "breed": self.breed,
            "weight": self.weight,
            "size": self.size,
            "user_id": self.user_id,
            "picture": self.picture
        }