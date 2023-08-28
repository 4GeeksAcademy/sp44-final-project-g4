from api.db import db

class VetFavoriteModel(db.Model):
    __tablename__ = "vet_favorite"
    id = db.Column(db.Integer, primarykey=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey("user.id"), unique=False, nullable=False
    )
    user = db.relationship("UserModel", back_populates="vet_favorite_model")
    vet_id = db.Column(
        db.Integer, db.ForeignKey("vet.id"), unique=False, nullable=False
    )
    # One to many
    vet = db.relationship("VetModel", back_populates="vet_favorite_model")
