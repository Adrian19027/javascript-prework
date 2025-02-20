var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

buttonTest = document.getElementById('button-test');
buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    
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
    
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);

}

   
    


buttonTest.addEventListener('click', function () { buttonClicked('Test button'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });

// Zmienne przechowujące liczbę wygranych rund
var playerScore = 0;
var computerScore = 0;

// Pobranie elementu do wyświetlania wyniku
var resultDiv = document.getElementById('result');

// Funkcja aktualizująca wynik gry na stronie
function updateScore() {
  resultDiv.innerHTML = `Wynik: ${playerScore} - ${computerScore}`;
}