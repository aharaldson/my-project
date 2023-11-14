// pseudocode //
//
// A BET MUST BE PLACED ON PASS LINE TO START
// const sections = document.getElementById('playfield').addEventListener('click', function(evt) {
//      
// [not sure how to handle the betting aspect, definitely an icebox item]
//
// SHOOTER ROLLS 2 DICE (NO POINT SET)
// firstRoll: function() {
// const randNum1 = Math.floor(Math.random() * 6) + 1
// const randNum2 = Math.floor(Math.random() * 6) + 1
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
