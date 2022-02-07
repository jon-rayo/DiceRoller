//Generate random number 1 - 6
const randNum = Math.floor(Math.random()*6) + 1;

// appends random dice number form dice1.png to dice6.png
const diceOne = 'img/dice' + randNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', diceOne);

//Generate random number 1 - 6
const randNumTwo = Math.floor(Math.random()*6) + 1;

// appends random dice number form dice1.png to dice6.png
const diceTwo = 'img/dice' + randNumTwo + '.png';

document.querySelectorAll('img')[1].setAttribute('src', diceTwo);

//Logic of the game

if (randNum > randNumTwo){
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
}
else if (randNum < randNumTwo) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!"
} 
else {
    document.querySelector('h1').innerHTML = "Draw!"
}

// Reloading the page