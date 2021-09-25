var Interval
var seconds = 0
var tens = 0
var counterTens = document.getElementById('tensCounter')
var counterSeconds = document.getElementById('secondsCounter')

getStarted = function() {
    clearInterval(Interval)
    Interval = setInterval(countTime, 10)
}

pause = function() {
    clearInterval(Interval)
}

reset = function() {
    clearInterval(Interval)
    tens = 0
    seconds = 0
    counterSeconds.innerText = '00'
    counterTens.innerText = '00'
}

countTime = function() {
    tens++
    
    if (tens <= 9) {
        counterTens.innerText = '0' + tens
    } if (tens > 9) {
        counterTens.innerText = tens
    } if (tens > 99) {
        console.log(seconds)
        seconds++
        counterSeconds.innerText = '0' + seconds
        tens = 0
    } if (seconds > 9) {
        counterSeconds.innerText = seconds
    }
}
