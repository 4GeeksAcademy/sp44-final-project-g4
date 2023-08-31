from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid


db = SQLAlchemy()


class FavoriteWalkers(db.Model):
    __tablename__ = "favorite_walkers"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (
        128 - 32), primary_key=True)
    user_id = db.Column(db.BigInteger, db.ForeignKey("user.id"))
    user = db.relationship("User")
    walker_id = db.Column(db.BigInteger, db.ForeignKey("walker.id"))
    walker = db.relationship("WalkerModel")

    def __repr__(self):
        return '<Favorite Walkers %r' % {self.id}

    def serialize(self):
        return {"id": self.id,
                "User ID": self.user_id,
                "Walker ID": self.walker_id,
                "User ID": self.user_id,
                "Walker ID": self.walker_id
                }
