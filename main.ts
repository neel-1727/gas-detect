let Gas = 0
pins.digitalWritePin(DigitalPin.P5, 1)
basic.forever(function () {
    Gas = pins.digitalReadPin(DigitalPin.P0)
    if (Gas == 0) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
basic.forever(function () {
    if (Gas == 0) {
        basic.showString("Danger Gas!")
    } else {
        basic.showString("Safe~")
    }
})
