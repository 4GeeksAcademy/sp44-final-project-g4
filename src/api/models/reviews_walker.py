from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid


db = SQLAlchemy()


class ReviewWalkers(db.Model):
    __tablaname__ = "review_walkers"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (128 - 32), primary_key=True)
    body = db.Column(db.String(250))
    date = db.Column(db.DateTime, default = datetime.utcnow)
    title = db.Column (db.String(100))
    rate = db.Column(db.Integer)
    walker_id = db.Column(db.BigInteger, db.ForeignKey("walker.id"))
    walker = db.relationship("WalkerModel")
    user_id = db.Column(db.BigInteger, db.ForeignKey("user.id"))
    user = db.relationship("User")

    def __repr__(self):
        return '<Review %r' % {self.id}
    
    def serialize(self):
        return {"id": self.id,
                "Body": self.body,
                "Date": self.date,
                "Title": self.title,
                "Rate": self.rate,
                "Walker ID": self.walker_id,
                "User ID": self.user_id
                }