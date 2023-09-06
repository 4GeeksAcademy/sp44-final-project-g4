from api.models import ma
from api.models import User, VetModel, GroomerModel, WalkerModel, VetFavoriteModel, PostModel
from marshmallow.fields import String
from marshmallow.fields import validate
from marshmallow import EXCLUDE

class UserSchema(ma.SQLAlchemyAutoSchema):
    name = String(required=True, validate=[validate.Length(min=2)])
    email = String(required=True, validate=[validate.Email()])
    phone_number = String(require=True, validate=validate.Regexp('(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})'))
    avatar = String(require=True, validate=validate.URL())
    class Meta:
        unknown = EXCLUDE
        model = User
        load_instance = True
        # exclude = ["id", "password"]

class VetSchema(ma.SQLAlchemyAutoSchema):
    name = String(required=True, validate=[validate.Length(min=4)])
    last_name = String(required=True, validate=[validate.Length(min=4)])
    email = String(required=True, validate=[validate.Email()])
    phone_number = String(require=True, validate=validate.Regexp('(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})'))
    avatar = String(validate=validate.URL())
    
    class Meta:
        unknown = EXCLUDE
        model = VetModel
        load_instance = True
        # exclude = ["password"]

class GroomerSchema(ma.SQLAlchemyAutoSchema):
    name = String(required=True, validate=[validate.Length(min=4)])
    last_name = String(required=True, validate=[validate.Length(min=4)])
    email = String(required=True, validate=[validate.Email()])
    phone_number = String(require=True, validate=validate.Regexp('(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})'))
    avatar = String(validate=validate.URL())
    class Meta:
        unknown = EXCLUDE
        model = GroomerModel
        exclude = ["password"]
        load_instance = True

class WalkerSchema(ma.SQLAlchemyAutoSchema):
    name = String(required=True, validate=[validate.Length(min=4)])
    last_name = String(required=True, validate=[validate.Length(min=4)])
    email = String(required=True, validate=[validate.Email()])
    phone_number = String(require=True, validate=validate.Regexp('(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})'))
    avatar = String(validate=validate.URL())
    class Meta:
        unknown = EXCLUDE
        model = WalkerModel
        exclude = ["password"]
        load_instance = True

