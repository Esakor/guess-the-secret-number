input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (number > Random) {
        basic.showString("High")
    } else if (number < Random) {
        basic.showString("Low")
    } else if (number == Random) {
        basic.showString("Win")
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
let Random = 0
Random = randint(0, 20)
number = 0
basic.forever(function () {
	
})
