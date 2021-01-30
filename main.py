from flask import Flask, render_template, flash, request, redirect, url_for, session
import json

app = Flask(__name__)

@app.route('/' , methods = ['GET' , 'POST'])
def index():
    return render_template('index.html')

@app.route('/test' , methods = ['GET' , 'POST'])
def test():
    return render_template('test.html')

@app.route('/createaccount' , methods = ['GET' , 'POST'])
def createaccount():
    return render_template('CreateAccount.html')

@app.route('/complete' , methods = ['GET' , 'POST'])
def complete():
    return render_template('completeaccount.html')

#In order to run type in termial
# python main.py
if __name__ == "__main__":
    app.run(debug=True)
