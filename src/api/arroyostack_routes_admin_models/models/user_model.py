from api.db import db


class UserModel(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(100), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    phone_number = db.Column(db.String(150), unique=True, nullable=False)
    #If no avatar provided an avatar will be generated.
    avatar = db.Column(db.String(2000), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # Relations
    vet_favorite = db.relationship("VetModel", back_populates="user")
    vet_review= db.relationship("VetReviewModel", back_populates="user")
    address = db.relationship("AddressModel", back_populates="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
