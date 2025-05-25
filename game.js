        let computerScore = 0;
        let playerScore = 0;

        const choices = {
            rock: '✊',
            paper: '✋',
            scissors: '✌️'
        };

        const choiceNames = ['rock', 'paper', 'scissors'];

        function getComputerChoice() {
            const randomIndex = Math.floor(Math.random() * 3);
            return choiceNames[randomIndex];
        }

        function determineWinner(playerChoice, computerChoice) 
            if (playerChoice === computerChoice) {
                return 'draw';
            }

            if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'scissors' && computerChoice === 'paper') ||
                (playerChoice === 'paper' && computerChoice === 'rock')
            ) {
                return 'player';
            } else {
                return 'computer';
            }

        function updateScore(winner) {
            if (winner === 'player') {
                playerScore++;
                document.getElementById('player-score').textContent = playerScore;
            } else if (winner === 'computer') {
                computerScore++;
                document.getElementById('computer-score').textContent = computerScore;
            }
        }

        function updateDisplay(playerChoice, computerChoice, winner) {
            document.getElementById('player-choice').textContent = choices[playerChoice];
            document.getElementById('computer-choice').textContent = choices[computerChoice];
            
            const resultBanner = document.getElementById('result-banner');
            if (winner === 'draw') {
                resultBanner.textContent = 'DRAW';
            } else if (winner === 'player') {
                resultBanner.textContent = 'PLAYER WINS';
            } else {
                resultBanner.textContent = 'COMPUTER WINS';
            }
        }

        function playGame(playerChoice) {
            const computerChoice = getComputerChoice();
            const winner = determineWinner(playerChoice, computerChoice);
            
            updateDisplay(playerChoice, computerChoice, winner);
            updateScore(winner);
        }
        document.getElementById('result-banner').textContent = 'Make your choice!'; 