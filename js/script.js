const buttonTest = document.getElementById('button-test');
const buttonPaper = document.getElementById('button-paper');
const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const resultDiv = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    
    let playerMove = argButtonName;
    console.log('Ruch gracza to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
      return 'papier'; 
  } else if (argMoveId == 3) {
      return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

const computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);

function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResult z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
            playerScore++; // Zwiększenie liczby wygranych gracza
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
            playerScore++; // Zwiększenie liczby wygranych gracza  
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
            playerScore++; // Zwiększenie liczby wygranych gracza  
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Jest remis!!!');
        } else {
            printMessage('Przegrywasz :(');
            computerScore++;
        }
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            updateScore();
    }

    displayResult(playerMove, computerMove);

}

buttonTest.addEventListener('click', function () { buttonClicked('Test button'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });

function updateScore() {
  resultDiv.innerHTML = `Wynik: ${playerScore} - ${computerScore}`;
}