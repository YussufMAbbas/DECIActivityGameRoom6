
function initializeGame() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Game initialization successful!");
        resolve();
      }, 2000); 
    });
}

initializeGame()