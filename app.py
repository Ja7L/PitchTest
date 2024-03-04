from flask import Flask, flash, redirect, render_template, request
from flask_session import Session

# Configure application
app = Flask(__name__)

# Set-up all routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/tuner", methods=["GET"])
def tuner():
    if request.method=="GET":
        return render_template("tuner.html")

@app.route("/pitchtest", methods=["GET"])
def pitchtest():
    if request.method == "GET":
        return render_template("pitchtest.html")

@app.route("/Piano", methods=["GET"])
def Piano():
    if request.method=="GET":
        return render_template("Piano.html")

@app.route("/keyboardPiano", methods=["GET"])
def keyboardPiano():
    if request.method=="GET":
        return render_template("keyboardPiano.html")
