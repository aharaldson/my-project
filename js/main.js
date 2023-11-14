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
//
// VARIABLES //
 let rollTotal = null;
 let currentPoint = null;
 let shooterData = {
    point = null;
    bet = null;
    gameState = null;
    bank = 100;
 }

 let newGame = fuction () {
    shooterData.point = 0;
    shooterData.bet = 0;
    shooterData.gameState = 'come'
 }

 let winner = function() {
    console.log('winner!');
    let winnings = (shooterData.bet * 2);
    shooterData.bank = shooterData.bank + winnings;
    newGame();
    return true;
 }

 let loser = function() {
    console.log('loser!');
    newGame();
    return true;
 }

let newPoint

// GAME STATES (functions?) // 


const playCraps = function () {
    if (shooterData.point < 1) {
        if (rollTotal === 7 || rollTotal === 11) {
            shooterData.point = rollTotal;
            winner();
            return true;
        } else if (rollTotal === 2 || rollTotal === 3 || rollTotal === 12) {
            shooterData.point = rollTotal;
            loser();
            return true;
        } else {
            shooterData.point = rollTotal;
            newPoint();
            return true;
        }
    }
    if (shooterData.point > 0) {
        if (rollTotal === 7) {
            loser();
            return true;
        } else if (shooterData.point === rollTotal) {
            shooterData.point = rollTotal;
            winner();
            return true;
        } else {}
    }
    return true;

}
// 
// GAMEBOARD // (sections, eventlisteners)
const sections = document.getElementById('playfield').addEventListener('click', function(evt) {
     console.log(evt.target.id)
// [not sure how to handle the betting aspect, definitely an icebox item]

// RULES //
 const rules = {
   firstRoll: {
        numsToWin: [7, 11]
        numsToLose: [2, 3, 12]
        numsPass: [4, 5, 6, 8, 9, 10]
        setPoint: {
     

 
 const rollDice = function() {
     const dice1 = Math.floor((Math.random() * 6) + 1);
     const dice2 = Math.floor((Math.random() * 6) + 1);
     rollTotal = (dice1 + dice2);

 
 passLine: {
  numsWin: [7, 11]
  numsLose: [2, 3, 12]
 }

 passLine: {
  setPoint: []
 }