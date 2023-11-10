input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (y < 20) {
        y += 1
        basic.showNumber(y)
    }
    music.playTone(831, music.beat(BeatFraction.Sixteenth))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (x == y) {
        music.playMelody("G B A G C5 B A B ", 500)
        basic.showNumber(z)
    } else {
        z += 1
        music.playMelody("C5 A B G A F G E ", 500)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (y > 0) {
        y += -1
        basic.showNumber(y)
    }
    music.playTone(698, music.beat(BeatFraction.Sixteenth))
})
let z = 0
let y = 0
let x = 0
x = randint(0, 20)
y = 0
