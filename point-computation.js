

let config_path = "config/"
let fs = require('fs')

class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  get x () { return this.x; }
  get y () { return this.y; }
}
class Level {
  // configurations for points
  static max_score = config.max;
  this.threshold = config.threshold;
  this.unit = config.unit;
  this.step = config.step;
  
  constructor (id, linear) {
    data = JSON.parse(fs.open(string(config_path) + string(id) + ".json"));
    config = JSON.parse(fs.open(config_path));

    // configurations for points
    this.max_score = config.max;
    this.threshold = config.threshold;
    this.unit = config.unit;
    this.step = config.step;

    // configurations for 
    this.c = this.threshold * this.threshold * this.max_score;
    this.location = data.loc;
    this.linear = linear;
  }

  getDist(point) {
    var miles = this.haversineDistance(this.point, point, true);
    return miles * 5280;
  }

  invsq(x) {
    var c = this.max_score * this.threshold ** 2 * this.unit ** -1;
    return c*x**(-2);
  }

  // neg-linear
  neglin(x) {
    var c = this.unit / this.step;
    return (1 / this.unit) * (this.max_score + this.unit - c*x)
  }


  getPoints(point) {
    var dist = getDist(point)
    if (dist < this.threshold) {
      return this.max_score;
    }
    else {
      if (linear) {
        return this.unit * Math.floor(neglin(dist));
      }
      else {
        return this.unit * Math.floor(invsq);
      }
    }
  }

  // site: https://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
  haversineDistance(coords1, coords2, isMiles) {
    function toRad(x) {
      return x * Math.PI / 180;
    }

    var lon1 = coords1.x;
    var lat1 = coords1.y;

    var lon2 = coords2.x;
    var lat2 = coords2.y;

    var R = 6371; // km

    var x1 = lat2 - lat1;
    var dLat = toRad(x1);
    var x2 = lon2 - lon1;
    var dLon = toRad(x2)
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    if(isMiles) d /= 1.60934;

    return d;
  }
}