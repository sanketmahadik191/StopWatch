const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

//toggle time for check start and stop

function toggleTimer() {
    if (startButtonEl.textContent === "Start") {
        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timerEl.textContent = formatTime(elapsedTime);
        }, 10);

        startButtonEl.textContent = "Pause";
        stopButtonEl.disabled = false;
    } else {
        clearInterval(timerInterval);
        startButtonEl.textContent = "Start";
        stopButtonEl.disabled = true;
    }
}

function formatTime(elapsedTime) {
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        " : " +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        " : " +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
    );
}

function resetTimer() {
    clearInterval(timerInterval);

    elapsedTime = 0;
    timerEl.textContent = "00 : 00 : 00";

    startButtonEl.disabled = false;
}

startButtonEl.addEventListener("click", toggleTimer);
resetButtonEl.addEventListener("click", resetTimer);
