const directions = ['north', 'east', 'south', 'west']
const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]]

class Robot {
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    return this.coordinates = [x, y]
  }

  setBearing(direction) {
    if (directions.includes(direction)) {
      return this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place({x, y, direction}) {
    this.setCoordinates(x, y)
    this.setBearing(direction)
  }

  turnRight() {
    let bearingIndex = directions.indexOf(this.bearing)
    if (bearingIndex === 3) {
      this.bearing = directions[0]
    } else {
      this.bearing = directions[++bearingIndex]
    }
  }

  turnLeft() {
    let bearingIndex = directions.indexOf(this.bearing)
    if (bearingIndex === 0) {
      this.bearing = directions[3]
    } else {
      this.bearing = directions[--bearingIndex]
    }
  }

  advance() {
    let bearingIndex = directions.indexOf(this.bearing)
    let move = moves[bearingIndex]
    let x = move[0] + this.coordinates[0]
    let y = move[1] + this.coordinates[1]
    this.coordinates = [x, y]
  }

  translateInstructions(string) {
    string.split('').forEach(letter => {
      if (letter === 'L') {
        this.turnLeft()
      } else if (letter === 'R') {
        this.turnRight()
      } else if (letter === 'A') {
        this.advance()
      }
    })
  }
}
