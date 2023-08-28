from api.db import db

class GroomerReviews(db.Model):
    __tablename__ = "groomerreviews"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    user = db.relationship("user", back_populates="groomerreviews")
    groomer_id = db.Column(db.Integer, ForeignKey('groomer.id'))
    groomer = db.relationship("GroomerModel", back_populates="groomerreviews")
    title = db.Column(db.String(80), unique=False, nullable=True)
    body = db.Column(db.String(200), unique=False, nullable=False)
    date = db.Column(db.String(80), unique=False, nullable=False)
    rate = db.Column(db.String(80), unique=False, nullable=False)


    def __repr__(self):
        return f'<groomerreviews {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "groomer_id": self.groomer_id,
            "title": self.title,
            "body": self.body,
            "date": self.date,
            "rate": self.rate
        }