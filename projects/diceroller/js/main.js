function DiceRoller() {
    let rollDice, diceSides, diceAmount

    //should generate a number base on the die selected,d4,d6,d8,d10,d12,d20,d100 
    this.rollDice = function(){
         let randomNumber = Math.floor(Math.random() * diceAmount) + 1
         return randomNumber
}
    //the ability to pick which die needed from list above ex. a d20 or 2d4, 2d8 etc 
    this.diceSides = function(){
        
}

    this.diceAmount = function(){
        if (diceAmount)
    }

}