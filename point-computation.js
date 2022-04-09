
data_path = "TO/BE/DETERMINED"
points_config = "TO/BE/DETERMINED" 
let fs = require('fs')

class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
}
class Level {
  constructor (id) {
    data = JSON.parse(fs.open(string(id) + ".json"));
    config = JSON.parse(fs.open(points_config));
    this.c = config.c;
    this.threshold = config.threshold;
    this.unit = config.unit
    this.location = data.loc;
  }

  getDist(point) {
    return (this.y - point.y) ** 2 + (this.x - point.x) ** 2;
  }

  getPoints(point) {
    dist = getDist(point)
    if (dist < (threshold ** 2)) {
      return hi;
    }
    else {
      return this.unit * Math.floor(this.c / dist);
    }
  }
}