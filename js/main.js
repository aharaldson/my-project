
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
const currentBankEl = document.getElementById('currentbank')
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
   currentBankEl.innerHTML = '$' + shooterData.bank;
   console.log(`You have $ ${shooterData.bank} left`);
};

function winner() {
   console.log('winner!');
   let winnings = (shooterData.bet * 2);
   shooterData.bank = shooterData.bank + winnings;
   comeOutNumEl.innerText = shooterData.point;
   winLoseEl.innerHTML = '<h3>You won $' + winnings + '! <br>Place another bet to play again</h3>';
   currentBankEl.innerHTML = '$' + shooterData.bank;
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
   let betValue = evt.target.value;
   betValue = Number(betValue);
   shooterData.bet = shooterData.bet + betValue;
   shooterData.bank = shooterData.bank - betValue;
   currentBetEl.innerText = "$" + shooterData.bet;
   console.log('add $5');
   currentBankEl.innerHTML = '$' + shooterData.bank;
   winLoseEl.innerHTML = '';
   return true;
};

function rollDice(evt) {
    if(shooterData.bet === 0) {
        return;
    };
    const dice1 = Math.floor((Math.random() * 6) + 1);
    const dice2 = Math.floor((Math.random() * 6) + 1);
    rollTotal = (dice1 + dice2);
    rollEl.innerText = rollTotal;
    console.log('dice rolled');
    winLoseEl.innerHTML = '';
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

onDomContentLoaded = (currentBankEl.innerHTML = '$' + shooterData.bank);