input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (number > Random) {
        basic.showString("High")
        Guesses += 1
    } else if (number < Random) {
        basic.showString("Low")
        Guesses += 1
    } else if (number == Random) {
        basic.showString("Win")
        basic.showString("Guesses")
        basic.showNumber(Guesses)
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let Guesses = 0
let number = 0
let Random = 0
Random = randint(0, 20)
number = 0
Guesses = 0
basic.forever(function () {
	
})
