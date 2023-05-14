// var scores, roundscore, activePlayer, dice;
// scores = [0,0];
// roundscore = 0;
// activePlayer = 1;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// /********************
//  * DOM manipulation - changing the content of an element
//  */

// // setting just a plain text and no HTML 
// // document.querySelector('#score--0').textContent = dice;
// document.querySelector('#current--' + activePlayer).textContent = dice; 

// // to set an HTML in a selected content - innerHTML

// // document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// // How to read from the DOM
// var x = document.querySelector('#score--0').textContent;
// console.log(x);

// document.querySelector('.dice').style.display = 'none';



var scores, roundscore, activePlayer, gamePlay;

init();
// introducing Events , event-listener

// function btn() {
//     // Do somehting here
// }
// btn();
// or
// Anonymous function - document.querySelector('.btn-roll).addEventListener('click', function() {
   // type here
// })

//for btn-roll --> create an anonymous function
document.querySelector('.btn--roll').addEventListener('click', function(){
    
   if(gamePlay) {
       // Random number 
    var dice = Math.floor(Math.random() * 6) + 1 ;

    // Display the result of the after tossed dice
    var diceDOM =  document.querySelector('.dice');
   diceDOM.style.display = 'block'; 
//    changing an image element after clicking
   diceDOM.src = 'dice-' + dice + '.png';

   // 3. Update the round score IF the rolled number is not 1

   if (dice !== 1) { 
      roundscore += dice;
      document.querySelector('#current--' + activePlayer).textContent = roundscore;
   }else{
      nextPlayer();

   }
   }
   

});

// for btn hold
document.querySelector('.btn--hold').addEventListener('click',function() {
   
   // Add current score to Global score
   scores[activePlayer] += roundscore;
   // update the UI 
   document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

   // check if player wins the game

   if (scores[activePlayer] >= 20) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
      // invisible dice
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player--' + activePlayer).classList.add('Winner!');
      document.querySelector('.player--' + activePlayer).classList.remove('Winner!');
      document.querySelector('.player--' + activePlayer).classList.remove('player--active');
      document.querySelector('.player--' + activePlayer).classList.add('player--active');
      gamePlay = false;
   }else{
   nextPlayer();
   }
});


// By using DRY
function nextPlayer(){
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundscore = 0;
      document.getElementById('current--0').textContent = 0;
      document.getElementById('current--1').textContent = 0;

      // who's turn after rolling 1
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');   


      document.querySelector('.dice').style.display = 'none';
      
}

// btn for New-game 

document.querySelector('.btn--new').addEventListener('click', init);
   

function init() {
   scores = [0,0];
   roundscore = 0;
   activePlayer = 0;
   gamePlay = true;
  
  
  document.querySelector('.dice').style.display = 'none';
  
        document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 1';
  document.querySelector('.player--0').classList.remove('Winner!');
  document.querySelector('.player--1').classList.remove('Winner!');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
}
// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '<em>';

// var y = document.querySelector('#score--0').textContent;
   