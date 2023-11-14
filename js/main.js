/* pseudocode //
//
// A BET MUST BE PLACED ON PASS LINE TO START
// const sections = document.getElementById('board').addEventListener('click', function(evt) {...
// [not sure how to handle the betting aspect, definitely an icebox item]
//
// SHOOTER ROLLS 2 DICE (NO POINT SET)
// firstRoll: function() {
// const randNum1 = Math.floor(Math.random() * 6) + 1 for each die
//
// FIRST ROLL (COMEOUT) 7 & 11 WINS, 2, 3, 12 LOSES
// passLine: {
//  numsWin: [7, 11]
//  numsLose: [2, 3, 12]
// }
//
// IF ANY OTHER NUM IS ROLLED (4, 5, 6, 8, 9, 10), SET POINT THERE
// passLine: {
//  setPoint: []
// }
//
// ONCE POINT IS SET, BETS CAN BE PLACED ANYWHERE AND SHOOTER ROLLS UNTIL WIN (POINT NUM) OR LOSE (7)
//
// IF POINT IS ROLLED BEFORE 7, PASS LINE BETS WIN
// IF 7 ROLLED BEFORE POINT, DON'T PASS BETS WIN, SHOOTER'S TURN IS OVER

// pseudocode //
//
// A BET MUST BE PLACED ON PASS LINE TO START
// SHOOTER ROLLS 2 DICE (NO POINT SET)
// FIRST ROLL (COMEOUT) 7 & 11 WINS, 2, 3, 12 LOSES
// IF ANY OTHER NUM IS ROLLED (4, 5, 6, 8, 9, 10), SET POINT THERE
// ONCE POINT IS SET, BETS CAN BE PLACED ANYWHERE AND SHOOTER ROLLS UNTIL WIN (POINT NUM) OR LOSE (7)
// IF POINT IS ROLLED BEFORE 7, PASS LINE BETS WIN
// IF 7 ROLLED BEFORE POINT, DON'T PASS BETS WIN, SHOOTER'S TURN IS OVER
//
*/
/*---- VARIABLES ----*/
let rollTotal = null;
let shooterData = {
   point: null,
   bet: 0,
   gameState: null,
   bank: 100,
};

/*---- ELEMENTS ----*/
const rollButtonEl = document.getElementById('rollbutton')
const betAddFiveEl = document.getElementById('betaddfive')
const currentBetEl = document.getElementById('currentbet')
const comeOutNumEl = document.getElementById('comeoutnumber')
const rollEl = document.getElementById('roll')
const winLoseEl = document.getElementById('winlose')
const playfieldEl = document.getElementById('playfield')

/*---- EVENT LISTENERS ----*/
betAddFiveEl.addEventListener('click', betAddFive)
rollButtonEl.addEventListener('click', rollDice)

/*---- FUNCTIONS ----*/
function newGame() {
   console.log('new game');
   shooterData.point = 0;
   shooterData.bet = 0;
   shooterData.gameState = 'come'
   currentBetEl.innerText = "$" + shooterData.bet;
};

function winner() {
   console.log('winner!');
   let winnings = (shooterData.bet * 2);
   shooterData.bank = shooterData.bank + winnings;
   comeOutNumEl.innerText = shooterData.point;
   winLoseEl.innerHTML = '<h3>You won $' + winnings + '! <br>Place another bet to play again</h3>';
   newGame();
   return true;
};

function loser() {
   console.log('loser!');
   comeOutNumEl.innerText = shooterData.point;
   winLoseEl.innerHTML = '<h3>You lost!<br>Place another bet to play again</h3>';
   newGame();
   return true;
};

function newPoint() {
    shooterData.gameState = 'point';
    comeOutNumEl.innerText = shooterData.point;
    return true;
};

function betAddFive(evt) {
   if()
   betValue = Number(betValue);
   shooterData.bet = shooterData.bet + betValue;
   shooterData.bank = shooterData.bank - betValue;
   currentBetEl.innerText = "$" + shooterData.bet;
   console.log('add $5');
   return true;
};

function rollDice() {
    const dice1 = Math.floor((Math.random() * 6) + 1);
    const dice2 = Math.floor((Math.random() * 6) + 1);
    rollTotal = (dice1 + dice2);
    rollEl.innerText = rollTotal;
    console.log('dice rolled');
   playCraps();
};

function playCraps() {
   if (shooterData.point < 1) {
       if (rollTotal === 7 || rollTotal === 11) {
           shooterData.point = rollTotal;
           winner();
           console.log("win on comeout");
           return true;
       } else if (rollTotal === 2 || rollTotal === 3 || rollTotal === 12) {
           shooterData.point = rollTotal;
           loser();
         console.log("craps");
           return true;
       } else {
           shooterData.point = rollTotal;
           newPoint();
           console.log("new point");
           return true;
       }
   }
   if (shooterData.point > 0) {
       if (rollTotal === 7) {
           loser();
           console.log("seven out");
           return true;
       } else if (shooterData.point === rollTotal) {
           shooterData.point = rollTotal;
           winner();
           console.log("point hit");
           return true;
       } else {}
   }
   return true;

};
