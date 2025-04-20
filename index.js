let timer;
let timeLeft = 1500; 
let isRunning = false;
let currentMode = 'pomodoro';

const display = document.getElementById("timer-display");

const modes = {
    pomodoro: 1500, 
    short: 300, 
    long: 900 
};

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function setMode(mode) {
    currentMode = mode;
    timeLeft = modes[mode];
    clearInterval(timer);
    isRunning = false;
    updateDisplay();
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    timeLeft = modes[currentMode];
    updateDisplay();
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 0;
    updateDisplay();
}


updateDisplay();