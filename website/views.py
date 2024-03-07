from flask import Blueprint

views = Blueprint('views', __name__) #"Blueprint for our flask application"

@views.route('/')
def home():
    return "<h1>Test</h1>"