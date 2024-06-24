document.addEventListener('DOMContentLoaded', (event) => {

    const startButton = document.getElementById('startButton');

    const stopButton = document.getElementById('stopButton');

    const gameStatus = document.getElementById('gameStatus');

 

    let gameInterval;

 startButton.addEventListener('click', () => {

        gameStatus.textContent = 'Game Started!';

        startGame();

    });

 

    stopButton.addEventListener('click', () => {

        gameStatus.textContent = 'Game Stopped!';

        stopGame();

    });

 

    function startGame() {

        gameInterval = setInterval(() => {

            console.log('Game is running...');

        }, 1000);

    }

 

    function stopGame() {

        clearInterval(gameInterval);

        console.log('Game has stopped.');

    }

});