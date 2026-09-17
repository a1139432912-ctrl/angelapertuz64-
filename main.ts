input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Ghost)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showString("Quiero salchipapa")
})
