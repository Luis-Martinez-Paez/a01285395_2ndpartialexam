let age = 0
let sum_age = 0
let total_child = 0
let total_adolescent = 0
let random_number1 = 0
let random_number2 = 0
let x = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 20; index++) {
        age = randint(5, 64)
        if (age >= 5 && age <= 13) {
            basic.showString("Child")
            sum_age += age
            total_child += 1
        } else if (age >= 14 && age <= 17) {
            basic.showString("Adolescent")
            sum_age += age
            total_adolescent += 1
        } else if (age >= 18 && age <= 35) {
            basic.showString("Young Adult")
            sum_age += age
        } else if (age >= 36 && age <= 64) {
            basic.showString("Adult")
            sum_age += age
        }
    }
    basic.showString("Average Age:")
    basic.showNumber(sum_age / 20)
    basic.showString("Total Children:")
    basic.showNumber(total_child)
    basic.showString("Total Adolescent:")
    basic.showNumber(total_adolescent)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let display_number = 0; display_number <= 5; display_number++) {
        basic.showNumber(display_number)
    }
    basic.clearScreen()
    basic.pause(100)
    random_number1 = randint(0, 10)
    random_number2 = randint(0, 10)
    if (random_number1 == random_number2) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("D A E A C G E F ", 120)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(165, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        x = 2
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(200)
            basic.clearScreen()
        }
    }
})
