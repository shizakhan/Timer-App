var min = 15
var sec = 60
var msec = 100
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {

    --msec
    msecHeading.innerHTML = msec;
    if(msec == 0){
        --sec
        secHeading.innerHTML = sec;
        msec = 100;
    }else if (sec == 0){
        --min
        minHeading.innerHTML = min;
        sec = 60;
    }

}

function start() {
    interval = setInterval(timer, 10)
}

function stop() {
    clearInterval(interval)
}
function restart() {
    min = 15;
    sec = 60;
    msec = 100;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
}