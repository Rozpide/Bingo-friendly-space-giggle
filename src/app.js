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

  const numberFacts = {
    1: "un palitoo",
    2: "un patito feo",
    3: "tres tristes tigres",
    4: " la suela de mi zapato",
    5: "mala rima",
    6: "el barrigon",
    7: "buena suerte",
    8: "el pelocho",
    9: "el cabezon",
    10: "la nota del instituto",
    11: "los dos palitos",
    12: "el dulce",
    13: "mala suerte",
    14: "tuerce botas",
    15: "la niña bonita",
    16: "es que no veis?",
    17: "es pa siempre",
    18: "otro pelocho",
    19: "paga y bebe",
    20: "el que miente",
    21: "patito palito",
    22: "los dos patitos",
    23: "lo ves o no lo ves",
    24: "tuece el zapato",
    25: "nananana te la inco",
    26: "tu suerte la ves",
    27: "es pa siempre",
    28: "siguiente pelocho",
    29: "pero mira como llueve",
    30: "calienta, calienta",
    33: "la edad de cristo",
    55: "bonita rima",
    69: "mal pensadoooos....",
    90: "el abuelo"
    // Añadir datos para otros números
  };

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
    const fact = numberFacts[number] ? `. ${numberFacts[number]}` : "";
    const msg = new SpeechSynthesisUtterance(
      `Siguiente número, ${number}${fact}`
    );
    window.speechSynthesis.speak(msg);
    announceDigits(number);
  }
  function announceDigits(number) {
    const digits = number.toString().split("");
    if (digits.length === 1) {
      const msgUnidad = new SpeechSynthesisUtterance(digits[0]);
      window.speechSynthesis.speak(msgUnidad);
    } else {
      const centena = digits[0];
      const unidad = digits[1];
      const msgCentena = new SpeechSynthesisUtterance(centena);
      const msgUnidad = new SpeechSynthesisUtterance(unidad);
      window.speechSynthesis.speak(msgCentena);
      window.speechSynthesis.speak(msgUnidad);
    }
  }

  function updateGrid(number) {
    const numberCell = document.getElementById(`number-${number}`);
    if (numberCell) {
      numberCell.classList.add("drawn");
    }
  }

  function startTimer() {
    countdown = 7;
    document.getElementById(
      "timer"
    ).innerText = `Próximo número en: ${countdown}s`;
    timerId = setInterval(() => {
      countdown--;
      document.getElementById(
        "timer"
      ).innerText = `Próximo número en: ${countdown}s`;
      if (countdown === 0) {
        countdown = 7;
      }
    }, 1000);
  }

  document.getElementById("start-button").addEventListener("click", () => {
    if (isPaused) {
      isPaused = false;
      intervalId = setInterval(drawNumber, 7000);
      startTimer();
    } else {
      generateBingoNumbers();
      drawnNumbers = [];
      document.getElementById("bingo-number").innerText = "--";
      intervalId = setInterval(drawNumber, 7000);
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
    document.getElementById("timer").innerText = "Próximo número en: 7s";
    isPaused = false;
  });
};
