from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

dataWasted = 0


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/start')
def startDownload():
    global dataWasted
    res = requests.get("https://desktop.githubusercontent.com/github-desktop/releases/3.3.11-d0de25f5/GitHubDesktopSetup-x64.exe", stream=True)
    
    for value in res.iter_content(chunk_size=1024):
        dataWasted = dataWasted + 1024
    
    res.close()
    result = {"result": 1}
    return jsonify(result)


@app.route('/data')
def getData():
    return {'data': dataWasted}


if __name__ == '__main__':
    app.run(debug=True)