let valid = ["north", "south", "east", "west"];

class Robot {
    constructor() {
		this.coordinates = [0,0]
		this.bearing = 'north'
	}

    setCoordinates(x,y) {
		this.coordinates = [x,y]
    }

	setBearing(direction) {
		if (valid.includes(direction)) {
			this.bearing = direction
		} else { 
			throw "Invalid Robot Bearing"
		}
	} 

	place(place) {
		this.setCoordinates(place['x'],place['y'])
		this.setBearing(place['direction'])
	}

	turnRight() {
		if (this.bearing == 'north') {
			this.bearing = 'east'
		} else if (this.bearing == 'east') {
			this.bearing = 'south'
		} else if (this.bearing == 'south') {
			this.bearing = 'west'
		} else {
			this.bearing = 'north'
		}
	} 

	turnLeft() {
		if (this.bearing == 'north') {
			this.bearing = 'west'
		} else if (this.bearing == 'east') {
			this.bearing = 'north'
		} else if (this.bearing == 'south') {
			this.bearing = 'east'
		} else {
			this.bearing = 'south'
		}
	} 

	advance() {
		if (this.bearing == 'north') {
			this.coordinates[1]++
		} else if (this.bearing == 'east') {
			this.coordinates[0]++
		} else if (this.bearing == 'south') {
			this.coordinates[1]--
		} else {
			this.coordinates[0]--
		}
	} 

	translateInstructions(string) {
		let instructions = string.split("") 
		instructions.forEach((letter) => {
			if (letter == "R") {
				this.turnRight()
			} else if (letter == "L") {
				this.turnLeft() 
			} else {
				this.advance()
			}
		})
	} 

}