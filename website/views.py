from flask import Blueprint, render_template

views = Blueprint('views', __name__) #"Blueprint for our flask application"

@views.route('/')
def home():
    return render_template("home.html")