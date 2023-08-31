from api.db import db

class VetFavoriteModel(db.Model):
    __tablename__ = "vet_favorite"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (
        128 - 32), primary_key=True)
    user_id = db.Column(db.BigInteger, db.ForeignKey(
        'user.id'), unique=False, nullable=False)
    vet_id = db.Column(
        db.BigInteger, db.ForeignKey("vet.id"), unique=False, nullable=False
    )
    # One to many
    vet = db.relationship("VetModel")
    user = db.relationship("User")

    def __repr__(self):
        return f'<Favorite Vet {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "vet_id": self.vet_id,
        }
