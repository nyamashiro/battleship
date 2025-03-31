const domEvents = (function () {
  function toggleHit(cell) {
    cell.classList.remove("active");
    cell.classList.add("hit");
    cell.classList.add("checked");
  }

  function toggleMiss(cell) {
    cell.classList.add("miss");
    cell.classList.add("checked");
  }

  function updateBannerHit(banner, textContent) {
    banner.textContent = textContent;
  }

  function updateBannerMiss(banner, textContent) {
    banner.textContent = textContent;
  }

  function updateBannerInvalid(banner) {
    banner.textContent = "Invalid move. Try again!";
  }

  function updateBannerGameOver(banner, textContent) {
    banner.textContent = `Game Over! ${textContent}!`;
  }

  function updateBannerNewGame(banner) {
    banner.textContent = "Click on the computer's board to attack!";
  }

  return {
    toggleHit,
    toggleMiss,
    updateBannerHit,
    updateBannerMiss,
    updateBannerInvalid,
    updateBannerGameOver,
    updateBannerNewGame,
  };
})();

export { domEvents };
