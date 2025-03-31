import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";
import { renderGameboards } from "./renders";
import { domEvents } from "./DOM-events.js";
import { gameboardHelperFunctions } from "./gameboard-helpers.js";

const gameController = (function () {
  let player;
  let computer;
  let currentPlayer = "player";
  let gameOver = false;

  function initGame() {
    player = new Player(new Gameboard());
    player.gameboard.createShips();
    computer = new Player(new Gameboard());
    computer.gameboard.createShips();

    renderGameboards.createPlayerBoard(player.gameboard);
    renderGameboards.createCpuBoard(computer.gameboard);
    eventListener();
  }

  function eventListener() {
    const ship = document.querySelector(".cpu-board");
    ship.addEventListener("dblclick", (e) => e.preventDefault);
    ship.addEventListener("click", (e) => {
      if (e.target.classList.contains("checked")) return;
      else if (e.target.classList.contains("cell")) {
        handlePlayerMove(e.target);
      }
    });
  }

  function newGame() {
    const newGameButton = document.querySelector(".new-game");
    const banner = document.querySelector(".info");

    newGameButton.addEventListener("click", () => {
      initGame();
      domEvents.updateBannerNewGame(banner);
      currentPlayer = "player";
      gameOver = false;
    });
  }

  function handlePlayerMove(cell) {
    if (gameOver === false) {
      const receiveAttack = computer.gameboard.receiveAttack(cell.id);
      const checkGameOver = computer.gameboard.checkGameOver();
      const banner = document.querySelector(".info");

      if (currentPlayer !== "player") return;
      if (cell.classList.contains("active")) {
        domEvents.toggleHit(cell);
        receiveAttack;
        domEvents.updateBannerHit(banner, "Hit!");
        if (checkGameOver) {
          handleGameOver();
          domEvents.updateBannerGameOver(banner, "You win!");
        }
      } else {
        domEvents.toggleMiss(cell);
        receiveAttack;
        domEvents.updateBannerMiss(banner, "You missed!");
      }
      currentPlayer = "";
      setTimeout(() => {
        handleComputerMove();
      }, 500);
    } else return;
  }

  function handleComputerMove() {
    if (gameOver === false) {
      const coordinates = gameboardHelperFunctions.getRandomCoordinates();
      const receiveAttack = player.gameboard.receiveAttack(coordinates);
      const checkGameOver = player.gameboard.checkGameOver();
      const banner = document.querySelector(".info");

      let cell = document.querySelector(`.${CSS.escape(coordinates)}`);
      if (receiveAttack === "hit") {
        domEvents.toggleHit(cell);
        domEvents.updateBannerHit(banner, "Computer hit your ship!");
        checkGameOver;
        if (checkGameOver) {
          handleGameOver();
          domEvents.updateBannerGameOver(banner, "Computer wins!");
        }
      } else {
        domEvents.updateBannerMiss(banner, "Computer missed!");
        domEvents.toggleMiss(cell);
      }
      currentPlayer = "player";
    } else return;
  }

  function handleGameOver() {
    gameOver = true;
  }

  return { initGame, newGame };
})();

export { gameController };
