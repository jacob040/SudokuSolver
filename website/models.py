from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class Score(db.Model):  #A user has many scores, a score has one user
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    firstName = db.Column(db.String(150))
    scores = db.relationship('Score')