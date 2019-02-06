class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0];
    this.bearing = 'north';
  }

  setCoordinates(x,y){
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(bearing){
    // if(bearing === 'north' || bearing === 'south' || bearing === 'east' || bearing === 'west'){
    //   this.bearing = bearing;
    // } else {
    //   console.log('invalid direction')
      switch (bearing){
        case 'north':
        this.bearing = 'north';
        break
        case 'east':
        this.bearing = 'east'
        break
        case 'south':
        this.bearing = 'south'
        break
        case 'west':
        this.bearing = 'west'
        break
        default:
        throw ("Invalid Robot Bearing");
        break
      }
  }

  place({x,y, direction}){
    this.setCoordinates(x,y);
    this.setBearing(direction);
  }

  turnRight(){
    switch (this.bearing) {
      case 'west':
      // console.log(this.bearing)
      this.bearing = 'north';
      break
      case 'south':
      // console.log(this.bearing)
      this.bearing = 'west';
      break
      case 'east':
      // console.log(this.bearing)
      this.bearing = 'south';
      break
      case 'north':
      // console.log(this.bearing)
      this.bearing = 'east';
      break
      }
    }

    turnLeft(){
      switch (this.bearing) {
        case 'west':
        // console.log(this.bearing)
        this.bearing = 'south';
        break
        case 'south':
        // console.log(this.bearing)
        this.bearing = 'east';
        break
        case 'east':
        // console.log(this.bearing)
        this.bearing = 'north';
        break
        case 'north':
        // console.log(this.bearing)
        this.bearing = 'west';
        break
        }
      }

    advance(){
      switch (this.bearing){
      case 'north':
      this.coordinates[1] += 1
      break
      case 'east':
      this.coordinates[0] += 1;
      break
      case 'south':
      this.coordinates[1] -= 1;
      break
      case 'west':
      this.coordinates[0] -= 1;
      break
      }
    }

    translateInstructions(instructions){
    instructions.split('').forEach( letter => {
      switch (letter){
        case 'L':
        this.turnLeft();
        break
        case 'R':
        this.turnRight();
        break
        case 'A':
        this.advance();
        break
      }

    })
  }
}
