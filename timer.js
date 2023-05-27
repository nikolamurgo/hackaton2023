var TotalSecFractions = 0
var timerInterval = null;
var timerStarted = false;
var minutes = 0;
var seconds = 0;

// ===================================================================================================================
function makeTimerText(secFractions) {
    seconds = Math.floor(secFractions / 10);
    if (seconds < 10) {
        seconds = "00" + seconds;
    }
    else if (seconds < 100) {
        seconds = "0" + seconds;
    }
    else {
        seconds = "" + seconds;
    }
    return seconds;
}

// ===================================================================================================================
function incrementTimeByOneFraction() {
    TotalSecFractions++;
    document.getElementById("timer").innerHTML = makeTimerText(TotalSecFractions);
}

// ===================================================================================================================
function timerStart() {
    if (timerStarted == true)
        return;

    timerInterval = stimerInterval = setInterval(incrementTimeByOneFraction, 100);
    timerStarted = true;
}

// ===================================================================================================================
function timerStop() {
    clearInterval(timerInterval);
    timerStarted = false;
}
