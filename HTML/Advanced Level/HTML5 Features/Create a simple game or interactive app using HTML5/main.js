let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess () {
    let userGuess = parseInt(document.getElementById('guessinput').value);
    attempts++;

    if(userGuess === randomNumber){
        document.getElementById('message').innerHTML = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
        document.getElementById('message').style.color = 'green';
        resetGame();
    } else if(userGuess > randomNumber){
        document.getElementById('message').innerHTML = 'Too high! try again.';
        document.getElementById('message').style.color = 'red';
    } else if(userGuess < randomNumber) {
        document.getElementById('message').innerHTML = 'Too low! Try again.';
        document.getElementById('message').style.color = 'red';
    }
}


function resetGame() {
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        document.getElementById('guessinput').value = '';
        document.getElementById('message').innerHTML = 'New game started! Guess again';
        document.getElementById('message').style.color = 'black';
    }, 3000);
}