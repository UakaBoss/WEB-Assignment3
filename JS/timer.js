const countdownElement = document.getElementById("timer-main");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const durationInput = document.getElementById("timer-duration");
let countdown;
let duration;

//when we click start button
startButton.addEventListener("click", () => {
    if (!countdown && durationInput.value) {
        startCountdown();
    }
});

//when we click stop button
stopButton.addEventListener("click", () => {
    if (countdown) {
        clearInterval(countdown);
        countdown = null;
    }
});

function startCountdown() {
    //setting duration
    duration = parseInt(durationInput.value);
    updateCountdown();

    //runs every second
    countdown = setInterval(() => {
        //deacrising duration to one second
        duration--;
        //updating the visual part of our countdown
        updateCountdown();

        //when time sets to ZERO, stop the countdown
        if (duration === 0) {
            clearInterval(countdown);
            countdown = null;
        }
    }, 1000);
}

//updating countdown by setting its content to duration's content
function updateCountdown() {
    countdownElement.textContent = duration;
}