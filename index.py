from flask import Flask, render_template
import requests

app = Flask(__name__)

dataWasted = 0


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/start')
def startDownload():
    global dataWasted
    res = requests.get("", stream=True)
    
    for value in res.iter_content(chunk_size=1024):
        dataWasted = dataWasted + 1024
    
    res.close()


@app.route('/data')
def getData():
    return {'data': dataWasted}


if __name__ == '__main__':
    app.run(debug=True)