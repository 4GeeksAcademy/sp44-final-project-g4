from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"
    id =  db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=True)
    phone_number = db.Column(db.String(150), unique=True)
    avatar = db.Column(db.String(2000), unique=False)
    password = db.Column(db.String(100), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    is_admin = db.Column(db.Boolean, default=False)
    is_active = db.Column(db.Boolean(), default=False)

    #Relations
    # address = db.relationship("AddressModel", back_populates="user")

    def __repr__(self):
        return f'<User {self.id} {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "avatar": self.avatar,
            "is_active": self.is_active,
            "is_admin": self.is_admin,
            "created_at": self.created_at

            # do not serialize the password, its a security breach
        }
    

    

class VetModel(db.Model):
    __tablename__ = "vet"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    phone_number = db.Column(db.String(150), unique=True, nullable=False)
    company_name = db.Column(db.String(100), unique=False, nullable=True)
    description =  db.Column(db.String(2000), unique=False, nullable=False)
    avatar = db.Column(db.String(2000), unique=True, nullable=False)
    services =  db.Column(db.String(2000), unique=False, nullable=True)
    price_low = db.Column(db.Integer, unique=False, nullable=False)
    price_high = db.Column(db.Integer, unique=False, nullable=True)

    def __repr__(self):
        return f'<Vet {self.id} {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "company_name": self.company_name,
            "description": self.description,
            "avatar": self.avatar,
            "services": self.services,
            "price_low": self.price_low,
            "price_high": self.price_high,
            "vet_favorite": self.vet_favorite,
            "vet_review": self.vet_review,
        }


class VetFavoriteModel(db.Model):
    __tablename__ = "vet_favorite"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'), unique=False, nullable=False)
    vet_id = db.Column(
        db.Integer, db.ForeignKey("vet.id"), unique=False, nullable=False
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
    
class VetReviewModel(db.Model):
    __tablename__ = "vet_review"
    id = db.Column(db.Integer, primary_key=True)
    title =  db.Column(db.String(300), unique=False, nullable=False)
    body = db.Column(db.String(3000), unique=False, nullable=False)
    date = db.Column(db.Date, unique=False, nullable=True)
    rate_enum = db.Enum('1', '2', '3', '4', '5', name='rate_enum')
    rate = db.Column(rate_enum, nullable=False)
    # Relations
    user_id = db.Column(
        db.Integer, db.ForeignKey("user.id"), unique=False, nullable=False
    )
    user = db.relationship("User")
    vet_id = db.Column(
        db.Integer, db.ForeignKey("vet.id"), unique=False, nullable=False
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
            "date": self.date,
            "rate": self.rate,
            "user_id": self.user_id,
            "vet_id": self.vet_id, 
        }



class PostModel(db.Model):
    __tablename__ = "post"
    id = db.Column(db.Integer, primary_key=True)
    title =  db.Column(db.String(300), unique=False, nullable=False)
    body = db.Column(db.String(3000), unique=False, nullable=False)
    date = db.Column(db.Date, unique=False, nullable=True)
    image = db.Column(db.String(3000), unique=False, nullable=False)
    category_enum = db.Enum('Salud', 'Bienestar', 'Belleza', name='category_enum')
    author = db.Column(db.String(200), unique=False, nullable=False)
    category = db.Column(category_enum, nullable=False)

    def __repr__(self):
        return f'<Post: {self.id} {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "date": self.date,
            "image": self.image,
            "category": self.category,
            "author": self.author,
            "category": self.category
        }

