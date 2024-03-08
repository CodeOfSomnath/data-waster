var startButton = document.getElementById("start")
var speedMeter = document.getElementById("meter")
var dataWasted = document.getElementById("value")


function update_meter(value) {
    speedMeter.innerText = value
}



function StartWaste() {
    // Create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    // Define the request method and URL
    xhr.open('GET', 'https://dl.google.com/go/go1.22.1.windows-amd64.msi', true);

    // Set up a function to handle the response
    xhr.onreadystatechange = function () {
        // Check if the request is complete
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Check if the request was successful
            if (xhr.status === 200) {
                // Parse the response data
                var responseData = xhr.responseText;

                // Do something with the response data
                // console.log(xhr.response);
            } else {
                // If the request was not successful, handle the error
                console.error('Request failed: ' + xhr.status);
            }
        }
    };

    // Send the request
    xhr.send();


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