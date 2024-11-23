import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let bingoNumbers = [];
  let drawnNumbers = [];
  let intervalId;
  let isPaused = false;
  let timerId;
  let countdown = 10;

  function generateBingoNumbers() {
    bingoNumbers = [];
    for (let i = 1; i <= 99; i++) {
      bingoNumbers.push(i);
    }
    createNumberGrid();
  }

  function createNumberGrid() {
    const grid = document.getElementById("number-grid");
    grid.innerHTML = "";
    for (let i = 1; i <= 99; i++) {
      const numberCell = document.createElement("div");
      numberCell.id = `number-${i}`;
      numberCell.textContent = i;
      grid.appendChild(numberCell);
    }
  }

  function drawNumber() {
    if (bingoNumbers.length === 0) {
      clearInterval(intervalId);
      clearInterval(timerId);
      return;
    }
    let randomIndex = Math.floor(Math.random() * bingoNumbers.length);
    let drawnNumber = bingoNumbers.splice(randomIndex, 1)[0];
    drawnNumbers.push(drawnNumber);
    document.getElementById("bingo-number").innerText = drawnNumber;
    document.getElementById("bingo-number").classList.add("number-display");
    setTimeout(() => {
      document
        .getElementById("bingo-number")
        .classList.remove("number-display");
    }, 1000);
    let audio = new Audio(
      "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YQAAAAA="
    );
    audio.play();
    setTimeout(() => {
      let audio = new Audio(
        "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YQAAAAA="
      );
      audio.play();
    }, 2000);
    updateGrid(drawnNumber);
  }

  function updateGrid(number) {
    const numberCell = document.getElementById(`number-${number}`);
    if (numberCell) {
      numberCell.classList.add("drawn");
    }
  }

  function startTimer() {
    countdown = 10;
    document.getElementById(
      "timer"
    ).innerText = `Próximo número en: ${countdown}s`;
    timerId = setInterval(() => {
      countdown--;
      document.getElementById(
        "timer"
      ).innerText = `Próximo número en: ${countdown}s`;
      if (countdown === 0) {
        countdown = 10;
      }
    }, 1000);
  }

  document.getElementById("start-button").addEventListener("click", () => {
    if (isPaused) {
      isPaused = false;
      intervalId = setInterval(drawNumber, 10000);
      startTimer();
    } else {
      generateBingoNumbers();
      drawnNumbers = [];
      document.getElementById("bingo-number").innerText = "--";
      intervalId = setInterval(drawNumber, 10000);
      startTimer();
    }
  });

  document.getElementById("pause-button").addEventListener("click", () => {
    clearInterval(intervalId);
    clearInterval(timerId);
    isPaused = true;
  });

  document.getElementById("reset-button").addEventListener("click", () => {
    clearInterval(intervalId);
    clearInterval(timerId);
    generateBingoNumbers();
    drawnNumbers = [];
    document.getElementById("bingo-number").innerText = "--";
    document.getElementById("timer").innerText = "Próximo número en: 10s";
    isPaused = false;
  });
};
