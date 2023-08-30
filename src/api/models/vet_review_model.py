from api.db import db

class VetReviewModel(db.Model):
    __tablename__ = "vet_review"
    id = db.Column(db.Integer, primarykey=True)
    body = db.Column(db.String(3000), unique=False, nullable=False)
    date = db.Column(db.Date, unique=False, nullable=True)
    title =  db.Column(db.String(300), unique=False, nullable=False)
    rate_enum = db.Enum('1', '2', '3', '4', '5', name='rate_enum')
    rate = db.Column(rate_enum, nullable=False)
    # Relations
    user_id = db.Column(
        db.Integer, db.ForeignKey("user.id"), unique=False, nullable=False
    )
    user = db.relationship("UserModel", back_populates="vet_review")
    vet_id = db.Column(
        db.Integer, db.ForeignKey("vet.id"), unique=False, nullable=False
    )
    # One to many
    vet = db.relationship("VetModel", back_populates="vet_review")