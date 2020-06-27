def doSomething(数字: number, 数字2: number):
    led.plot(数字, 数字2)
basic.show_leds("""
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    """)
basic.pause(100)

def on_forever():
    basic.show_string("" + str((input.button_is_pressed(Button.A))))
    basic.pause(100)
basic.forever(on_forever)
