enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message2)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Square)
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    cuteBot.moveTime(cuteBot.Direction.backward, 50, 1)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
})
radio.setGroup(1)
while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline))) {
    cuteBot.stopcar()
}
