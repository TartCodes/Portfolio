
class Die {
    constructor(sides){
        this.sides = sides
    }
    roll(){
        //rolls the die
        return Math.floor(Math.random() * this.sides) + 1        
    }
}

let d100 = new Die(100)
let d20 = new Die(20)
let d10 = new Die(10)
let d6 = new Die(6)
let d4 = new Die(4)
let d2 = new Die(2)

