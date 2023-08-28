from api.db import db

class PostModel(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    title =  db.Column(db.String(300), unique=False, nullable=False)
    body = db.Column(db.String(3000), unique=False, nullable=False)
    date = db.Column(db.Date, unique=False, nullable=True)
    image = db.Column(db.String(3000), unique=False, nullable=False)
    category_enum = db.Enum('Salud', 'Bienestar', 'Belleza', name='category_enum')
    author = db.Column(db.String(200), unique=False, nullable=False)
    category = db.Column(category_enum, nullable=False)