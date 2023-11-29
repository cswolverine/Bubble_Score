var timer = 60;
var score = 0;
var hitrn = 0;
var maxScore = 100;
var timerint;
var newTimer;
var newScore;

document.querySelector("#pbom").innerHTML = `<h1>Click Start To Play</h1>`;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function MakeBubble() {
  var clutter = "";
  for (var i = 1; i <= 108; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }
  document.querySelector("#pbom").innerHTML = clutter;
}

function RunTimer() {
  timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      if (score > maxScore) maxScore = score;
      document.querySelector(
        "#pbom"
      ).innerHTML = `<h1>Your Score ${score}<br> Max Score ${maxScore}<\h1>`;
    }
  }, 1000);
}

document.querySelector("#pbom").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (hitrn === clickedNum) {
    increaseScore();
    getNewHit();
    MakeBubble();
  }
});

document.querySelector("#startButton").addEventListener("click", function () {
  if (document.querySelector("#startButton").textContent == "Start") {
    getNewHit();
    RunTimer();
    MakeBubble();
    document.querySelector("#startButton").textContent = "Restart";
  } else {
    clearInterval(timerint);
    timer = 61;
    RunTimer();
    getNewHit();
    MakeBubble();
    score = 0;
    document.querySelector("#scoreval").textContent = score;
  }
});

document.querySelector("#pauseButton").addEventListener("click", function () {
  if (document.querySelector("#pauseButton").textContent == "Pause") {
    newTimer = timer;
    clearInterval(timerint);
    document.querySelector("#pauseButton").textContent = "Resume";
    document.querySelector("#pbom").innerHTML = `<h1>Paused</h1>`;
  } else {
    document.querySelector("#pauseButton").textContent = "Pause";
    timer = newTimer;
    RunTimer();
    MakeBubble();
  }
});
