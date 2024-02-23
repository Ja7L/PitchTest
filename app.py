from flask import Flask, flash, redirect, render_template, request
from flask_session import Session

# Configure application
app = Flask(__name__)


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/tuner", methods=["GET"])
def tuner():
    if request.method=="GET":
        return render_template("tuner.html")

@app.route("/pitchtest", methods=["GET", "POST"])
def pitchtest():
    """Get stock quote."""
    if request.method == "GET":
        return render_template("pitchtest.html")

@app.route("/Piano", methods=["GET"])
def Piano():
    if request.method=="GET":
        return render_template("Piano.html")

@app.route("/keyboardPiano", methods=["GET"])
def keyboardPiano():
    return render_template("keyboardPiano.html")
