from api.db import db

class VetReviewModel(db.Model):
    __tablename__ = "vet_review"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (
        128 - 32), primary_key=True)
    title = db.Column(db.String(300), unique=False, nullable=False)
    body = db.Column(db.String(3000), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    rate_enum = db.Enum('1', '2', '3', '4', '5', name='rate_enum')
    rate = db.Column(rate_enum, nullable=False)
    # Relations
    user_id = db.Column(
        db.BigInteger, db.ForeignKey("user.id"), unique=False, nullable=False
    )
    user = db.relationship("User")
    vet_id = db.Column(
        db.BigInteger, db.ForeignKey("vet.id"), unique=False, nullable=False
    )
    # One to many
    vet = db.relationship("VetModel")

    def __repr__(self):
        return f'<Review: {self.id} >'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "date": self.created_at,
            "rate": self.rate,
            "user_id": self.user_id,
            "vet_id": self.vet_id,
        }
