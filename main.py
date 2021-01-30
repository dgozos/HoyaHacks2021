from flask import Flask, render_template, flash, request, redirect, url_for, session
import json

app = Flask(__name__)

@app.route('/' , methods = ['GET' , 'POST'])
def index():
    return render_template('index.html')


#In order to run type in termial
# python main.py
if __name__ == "__main__":
    app.run(debug=True)
