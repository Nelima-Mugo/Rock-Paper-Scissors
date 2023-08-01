
    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0,
    };

    updateScoreElement();


    /*
        if (score === null) {
          score = {
            wins: 0,
            losses: 0,
            ties: 0,
          }
        }
    */

    let isAutoPlaying = false;
    let intervalID;

    function autoPlay(){
      if (!isAutoPlaying) {
        intervalID = setInterval(function(){
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
      }
      else{
        clearInterval(intervalID);
        isAutoPlaying = false;
      }
      
    }
    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You Lose.';
        } else if (computerMove === 'paper') {
          result = 'You Win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }
      }

      else if (playerMove === 'paper') {

        if (computerMove === 'rock') {
          result = 'You Win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You Lose.';
        }
      }

      else if (playerMove === 'rock') {

        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You Lose.';
        } else if (computerMove === 'scissors') {
          result = 'You Win.';
        }
      }

      

      if (result === 'You Win.') {
        score.wins++;
      } else if (result === 'Tie.') {
        score.ties++;
      } else if (result === 'You Lose.') {
        score.losses++;
      }

     

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You 
    <img class="move-icon" src="../Lesson10 - HTML CSS Javascript together/images/${playerMove}-emoji.png"> 
    <img class="move-icon" src="../Lesson10 - HTML CSS Javascript together/images/${computerMove}-emoji.png"> 
    Computer`;

      updateScoreElement();
     
    }

    function updateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }