var startButton = document.getElementById("start")
var speedMeter = document.getElementById("meter")
var dataWasted = document.getElementById("value")


function update_meter(value) {
    speedMeter.innerText = value
}

async function downloadBigFile(url) {

    let header = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');

    header.append('Access-Control-Allow-Origin', 'http://localhost:5500');
    header.append('Access-Control-Allow-Credentials', 'true');

    const response = await fetch(url, {headers: header});
    const reader = response.body.getReader();

    const contentLength = + response.headers.get('Content-Length');
    let receivedLength = 0;
    const chunks = [];

    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        receivedLength += value.length;

        console.log(`Received ${receivedLength} of ${contentLength}`);
    }

    const blob = new Blob(chunks);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'bigfile';
    link.click();
}

function StartWaste() {
    downloadBigFile("https://www.python.org/ftp/python/3.12.2/python-3.12.2-amd64.exe")
}

function StopWaste() {

}


startButton.addEventListener("click", (ev) => {
    var text = startButton.innerText
    if (text === "Start") {
        // starting waste
        startButton.innerText = "Stop"
        StartWaste()

    } else {
        startButton.innerText = "Start"
        StopWaste()
    }
})