input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
basic.showIcon(IconNames.House)
basic.pause(1000)
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Fabulous)
})
