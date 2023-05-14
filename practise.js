

var scores, roundscore, activePlayer, gamePlay;

init();
// btn-row

document.querySelector('.btn--roll').addEventListener('click', function() {
if (gamePlay) {
    
    var dice = Math.floor(Math.random() * 6) + 1;
    var lastDice = Math.floor(Math.random() * 6) + 1;

    // showing the dice
    var diceDOM = document.querySelector('.dice');
    var lastDOM = document.querySelector('.last_dice');
    diceDOM.style.display = 'block';
    lastDOM.style.display = 'block';
    // changing the dice
    diceDOM.src = 'dice-' + dice + '.png';
    lastDOM.src = 'dice-' + lastDice + '.png';

    // if (dice !== 6 && lastDice !== 6) {
        
    //     document.querySelector('#current--' + activePlayer).textContent = roundscore;
    // }else{
    //     nextPlayer();
    // }
    
    // update the roundscore unless when dice is 1
    if (dice !== 1 && lastDice !== 1) {
        roundscore += dice + lastDice;
            document.querySelector('#current--' + activePlayer).textContent = roundscore;
    }else{
        nextPlayer();
    }
}


});

// btn-hold

document.querySelector('.btn--hold').addEventListener('click', function() {

    // add current score to global score

    scores[activePlayer] += roundscore;

    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('#changeScore-input').value;
    var winningScore;
    // console.log(input);
    // undefined, null, o, "",  are coerced to be false, while others are coerced to be true

    if (input) {
        winningScore = input;
    }else{
        winningScore = 100;
    }

    
    // who wins
    if (scores[activePlayer] >= winningScore ) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.last_dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('Winner!');
        document.querySelector('.player--' + activePlayer).classList.remove('Winner!');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        document.querySelector('.player--' + activePlayer).classList.add('player--active');
        
        gamePlay = false;
        
    }else{
        nextPlayer();
    }

    
    
})

function nextPlayer() {
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
        roundscore = 0;
        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;
        // whos turn after playing 1

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.last_dice').style.display = 'none';
}


// btn-Newgame

document.querySelector('.btn--new').addEventListener('click', init);




function init() {
    scores = [0,0];
    roundscore = 0;
    activePlayer = 0;
    gamePlay = true;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.last_dice').style.display = 'none';

document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
document.querySelector('#current--0').textContent = 0;
document.querySelector('#current--1').textContent = 0;
document.querySelector('#name--0').textContent = 'Player 1';
document.querySelector('#name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('Winner!');
document.querySelector('.player--1').classList.remove('Winner!');
document.querySelector('.player--0').classList.add('player--active');
document.querySelector('.player--1').classList.remove('player--active');

}