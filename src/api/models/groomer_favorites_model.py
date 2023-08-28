from api.db import db

class GroomerFavoritesModel(db.Model):
    __tablename__ = "groomerfavorites"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    user = db.relationship("user", back_populates="groomerfavorites")
    groomer_id = db.Column(db.Integer, ForeignKey('Groomer.id'))
    groomer = db.relationship("GroomerModel", back_populates="groomerfavorites")
    


    def __repr__(self):
        return f'<groomerfavorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "groomer_id": self.groomer_id    
        }