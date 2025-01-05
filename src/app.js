/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let bingoNumbers = [];
  let drawnNumbers = [];
  let intervalId;
  let isPaused = false;
  let timerId;
  let countdown =10;

  function generateBingoNumbers() {
    bingoNumbers = [];
    for (let i = 1; i <= 90; i++) {
      bingoNumbers.push(i);
    }
    createNumberGrid();
  }

  function createNumberGrid() {
    const grid = document.getElementById("number-grid");
    grid.innerHTML = "";
    for (let i = 1; i <= 90; i++) {
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
    announceNumber(drawnNumber);
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

  function announceNumber(number) {
    const msg = new SpeechSynthesisUtterance(`Siguiente número, ${number}`);
    window.speechSynthesis.speak(msg);
  }

  function updateGrid(number) {
    const numberCell = document.getElementById(`number-${number}`);
    if (numberCell) {
      numberCell.classList.add("drawn");
    }
  }

  function startTimer() {
    countdown = 6;
    document.getElementById(
      "timer"
    ).innerText = `Próximo número en: ${countdown}s`;
    timerId = setInterval(() => {
      countdown--;
      document.getElementById(
        "timer"
      ).innerText = `Próximo número en: ${countdown}s`;
      if (countdown === 0) {
        countdown = 6;
      }
    }, 1000);
  }

  document.getElementById("start-button").addEventListener("click", () => {
    if (isPaused) {
      isPaused = false;
      intervalId = setInterval(drawNumber, 6000);
      startTimer();
    } else {
      generateBingoNumbers();
      drawnNumbers = [];
      document.getElementById("bingo-number").innerText = "--";
      intervalId = setInterval(drawNumber, 6000);
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
    document.getElementById("timer").innerText = "Próximo número en: 6s";
    isPaused = false;
  });
};*/
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
    for (let i = 1; i <= 90; i++) {
      bingoNumbers.push(i);
    }
    createNumberGrid();
  }

  function createNumberGrid() {
    const grid = document.getElementById("number-grid");
    grid.innerHTML = "";
    for (let i = 1; i <= 90; i++) {
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
    announceNumber(drawnNumber);
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

  function announceNumber(number) {
    const msg = new SpeechSynthesisUtterance(`Siguiente número, ${number}`);
    window.speechSynthesis.speak(msg);
    announceDigits(number);
  }

  function announceDigits(number) {
    const digits = number.toString().split("");
    const centena = digits[0];
    const unidad = digits[1] || "cero"; // Para manejar números menores a 10
    const msgCentena = new SpeechSynthesisUtterance(centena);
    const msgUnidad = new SpeechSynthesisUtterance(unidad);
    window.speechSynthesis.speak(msgCentena);
    window.speechSynthesis.speak(msgUnidad);
  }

  function updateGrid(number) {
    const numberCell = document.getElementById(`number-${number}`);
    if (numberCell) {
      numberCell.classList.add("drawn");
    }
  }

  function startTimer() {
    countdown = 6;
    document.getElementById(
      "timer"
    ).innerText = `Próximo número en: ${countdown}s`;
    timerId = setInterval(() => {
      countdown--;
      document.getElementById(
        "timer"
      ).innerText = `Próximo número en: ${countdown}s`;
      if (countdown === 0) {
        countdown = 6;
      }
    }, 1000);
  }

  document.getElementById("start-button").addEventListener("click", () => {
    if (isPaused) {
      isPaused = false;
      intervalId = setInterval(drawNumber, 6000);
      startTimer();
    } else {
      generateBingoNumbers();
      drawnNumbers = [];
      document.getElementById("bingo-number").innerText = "--";
      intervalId = setInterval(drawNumber, 6000);
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
    document.getElementById("timer").innerText = "Próximo número en: 6s";
    isPaused = false;
  });
};
