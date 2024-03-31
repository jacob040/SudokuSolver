from flask import Blueprint, render_template
from flask_login import login_required, current_user   #current_user related to UserMixin

views = Blueprint('views', __name__) #"Blueprint for our flask application"

@views.route('/')
@login_required #Makes homepage unavailible unless logged in
def home():
    return render_template("home.html", user=current_user)