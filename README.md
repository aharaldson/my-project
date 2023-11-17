# Let's play *CRAPS*! 

![craps table](/imgs/crapsTable1200.png)

#### (kind of)

### What is craps?

Craps is a dice game that originated in New Orleans in around 1805. 
It is a derivative of "Krabs", itself a variation of the earlier dice game "hazard". 

Craps has ***many*** rules and two main phases: the "*come-out*" and the "*point*". 
The shooter is the player whose turn it is to roll the dice, and they must place a bet on either the "pass" or "don't pass" line. 
Once the bet is laid, the shooter rolls the come-out. 

Rolling a **2**, **3**, or **12** on the come-out roll is an instant loss (called "craps" or "crapping out"). 
A "craps" roll means any bets on the pass line lose, and bets on the don't pass line win. 
Conversely, rolling a **7** or **11** on the come-out is a "natural", and the pass line bets win (don't pass loses).

The other possible rolls on the come-out (4, 5, 6, 8, 9, or 10) are the point numbers. 
A come-out roll of a point number establishes the point for the rest of the round (the shooter's turn). 
Once the point is set, the shooter aims to roll that number again *before* they roll a 7. 
If the shooter rolls a 7 before the point they set, pass line bets lose, don't pass bets win, and the shooter's turn is over.

There are many other bets than can be made, but this version of the game focuses only on these "core" rules.

### How to play

The controls of this version game are very simple:
- You will start with $100 in credit
- A bet of at least $5 must be placed to roll (bets are automatically placed on the pass line)

- Once the bet is laid, the player rolls the dice
- 7 & 11 on the initial roll win and pay double the bet, and rolling 2, 3, & 12 "craps out"
- Rolling any other sum sets the point, and the turn continues

- If a point is set, the player must roll that number again before they roll 7
- Doing so wins, and double the bet is added to your credits
- Rolling 7 is the only way to lose once the point is set; 2, 3, & 12 are only "craps" on the come-out roll

### Getting started

**[CLICK HERE](https://aharaldson.github.io/my-project/)** to play!

### Gameplay examples

![shooter rolls a 7 on the come-out](/imgs/comeOut7.png)
*Shooter rolls a 7 on the come-out and wins*

![shooter rolls a 3 on the come-out](/imgs/comeOut3.png)
*Shooter rolls a 3 on the come-out and loses*

![point set 6, shooter rolls 11](/imgs/point6roll11.png)
*Shooter rolls an 11, but the point is set to 6; round continues*

![Shooter sevens out](/imgs/7out.png)
*Point is set to 10, but the shooter sevens out*

### How this game was made

This basic, browser-based craps game was written in HTML, CSS, and Javascript

### Next steps

- Fleshing out the ruleset to include more betting options
- Fixing the "bank" (currently, players can have a negative credits balance, which most casinos frown upon)
- Animating the dice, placeable chips for bets, and an interactive point marker
- Multiplayer (the more people at a craps table, the better!)