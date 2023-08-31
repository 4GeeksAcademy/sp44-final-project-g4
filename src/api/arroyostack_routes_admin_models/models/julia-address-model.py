class Address(db.Model):
    __table_name__="AddressModel"
    id = db.Column(db.BigInteger, default=lambda: uuid.uuid4().int >> (
        128 - 32), primary_key=True)
    street = db.Column(db.String(400), unique=False, nullable=False)
    number = db.Column(db.Integer, unique=False, nullable=False)
    zip_code = db.Column(db.Integer, unique=False, nullable=False)
    user_id = db.Column(
        db.BigInteger, db.ForeignKey("user.id"), unique=False, nullable=False
    )
    user = db.relationship("User")

    def __repr__(self):
        return f'<Adress: {self.id} {self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "street": self.street,
            "body": self.body,
            "number": self.number,
            "zip_code": self.zip_code,
            "user_id": self.user_id,
        }