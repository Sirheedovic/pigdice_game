

var scores, roundscore, activePlayer, gamePlay;

init();
// btn-row

var lastDice;

document.querySelector('.btn--roll').addEventListener('click', function() {
if (gamePlay) {
    
    var dice = Math.floor(Math.random() * 6) + 1;
    // var lastDice = Math.floor(Math.random() * 6) + 1;

    // showing the dice
    var diceDOM = document.querySelector('.dice');
    // var lastDOM = document.querySelector('.last_dice');
    diceDOM.style.display = 'block';
    // changing the dice
    diceDOM.src = 'dice-' + dice + '.png';
    // saving a variable
    // stating a condition which sets the global score to zero-----
    if (dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score--' + activePlayer).textContent = '0';
        nextPlayer();
    }else if (dice !== 1) {
            
            roundscore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundscore;
    }else{
        nextPlayer();
    }
    lastDice = dice;
}


})

// btn-hold

document.querySelector('.btn--hold').addEventListener('click', function() {

    // add current score to global score

    scores[activePlayer] += roundscore;

    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    // who wins
    if (scores[activePlayer] >= 100 ) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';

        document.querySelector('.player--' + activePlayer).classList.add('Winner!');
        document.querySelector('.player--' + activePlayer).classList.remove('Winner!');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        document.querySelector('.player--' + activePlayer).classList.add('player--active');
        
        gamePlay = false;
        document.querySelector('.dice').style.display = 'none';
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