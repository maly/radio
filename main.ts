radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    serial.writeNumber(0)
    serial.writeLine("")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    serial.writeNumber(1)
    serial.writeLine("")
})
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
basic.forever(function () {
	
})
