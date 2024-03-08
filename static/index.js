var startButton = document.getElementById("start")
var speedMeter = document.getElementById("meter")
var dataWasted = document.getElementById("value")


function update_meter(value) {
    speedMeter.innerText = value
}



function StartWaste() {
    console.log("starting download")
    fetch('/start').then(res => {
        console.log("complete download")
    })

    fetch('/data').then(res => {
        res.json().then(val =>{
            var dataWastedValue = val['data']
            dataWasted.innerText = `Data Wasted: ${data/1024} MB`
        })
    })

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