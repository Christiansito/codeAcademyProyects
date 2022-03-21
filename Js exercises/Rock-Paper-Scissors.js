const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||userInput === 'paper'||userInput ==='scissors') {
      return userInput;
    }else {
      return 'Must be rock, paper or scissors!';
    }
  }
  
  const getComputerChoice = () => {
    let  randomNumber = Math.floor(Math.random() *3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'its a Tie!';
    } 
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'Computer beat you!';
      }else {
        return 'You Won!';
      }  
    }
      if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'Computer beat you!';
      }else {
        return 'You Won!';
      }  
    }
      if(userChoice === 'scissors') {
       if(computerChoice === 'rock') {
        return 'Computer beat you!';
        }else {
         return 'You Won!';
      }  
    }
  }
  const playGame = () => {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice)); 
  }
  playGame();