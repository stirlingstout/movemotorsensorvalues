input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
})
