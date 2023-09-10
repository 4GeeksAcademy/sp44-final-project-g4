import os
from flask_admin import Admin


from .models import db, User, WalkerModel, ReviewWalkers, FavoriteWalkers, GroomerModel, GroomerReviewsModel, GroomerFavoritesModel, VetModel, VetFavoriteModel, VetReviewModel, PostModel


from flask_admin.contrib.sqla import ModelView


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')


    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))

    admin.add_view(ModelView(WalkerModel, db.session))
    admin.add_view(ModelView(ReviewWalkers, db.session))
    admin.add_view(ModelView(FavoriteWalkers, db.session))
    admin.add_view(ModelView(GroomerModel, db.session))
    admin.add_view(ModelView(GroomerReviewsModel, db.session))
    admin.add_view(ModelView(GroomerFavoritesModel, db.session))
    admin.add_view(ModelView(VetModel, db.session))
    admin.add_view(ModelView(VetFavoriteModel, db.session))
    admin.add_view(ModelView(VetReviewModel, db.session))
    admin.add_view(ModelView(PostModel, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
