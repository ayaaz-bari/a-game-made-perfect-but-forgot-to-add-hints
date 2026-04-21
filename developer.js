let number = Math.floor(Math.random() * 201);
let lives = 7;

const hints = [
    "Think in ranges, not exact numbers.",
    "It might not be where you first think.",
    "Closer doesn’t always mean obvious.",
    "Try adjusting your step size.",
    "Patterns can mislead you.",
    "Balance your guesses carefully.",
    "Consider both extremes."
];

const backgrounds = [
    "linear-gradient(45deg, #1e3c72, #2a5298)",
    "linear-gradient(45deg, #ff512f, #dd2476)",
    "linear-gradient(45deg, #00c6ff, #0072ff)",
    "linear-gradient(45deg, #11998e, #38ef7d)",
    "linear-gradient(45deg, #fc466b, #3f5efb)"
];

const musicList = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
];

function updateHearts() {
    document.getElementById("hearts").innerHTML = "❤️".repeat(lives);
}

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let hintText = document.getElementById("hint");

    if (guess === number) {
        document.getElementById("win").classList.remove("hidden");
        return;
    }

    lives--;
    updateHearts();

    let randomHint = hints[Math.floor(Math.random() * hints.length)];

    if (guess > number) {
        hintText.innerText = "Too high. " + randomHint;
    } else {
        hintText.innerText = "Too low. " + randomHint;
    }

    if (lives <= 0) {
        document.getElementById("gameOver").classList.remove("hidden");
    }
}

function resetGame() {
    number = Math.floor(Math.random() * 201);
    lives = 7;
    updateHearts();
    document.getElementById("hint").innerText = "";
    document.getElementById("guess").value = "";
    document.getElementById("gameOver").classList.add("hidden");
    document.getElementById("win").classList.add("hidden");
}

function quitGame() {
    document.body.innerHTML = "<h1>Thanks for playing!</h1>";
}

// Background changer
setInterval(() => {
    document.body.style.background =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];
}, 15000);

// Music changer
const music = document.getElementById("music");
setInterval(() => {
    music.src = musicList[Math.floor(Math.random() * musicList.length)];
    music.play();
}, 10000);

// Init
updateHearts();