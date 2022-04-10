
let fs = require('fs');

let config_path = "config/";
const conf = fs.read(config_path + "config.json");

class Level {
  static config = JSON.parse(conf);

  // configurations for points
  static max_score = Level.config.max;
  static threshold = Level.config.threshold;
  static unit = Level.config.unit;
  static step = Level.config.step;
  
  // configurations for points
  static max_score = Level.config.max;
  static threshold = Level.config.threshold;
  static unit = Level.config.unit;
  static step = Level.config.step;

  constructor (id, linear) {
    var info = JSON.parse(config_path + id + ".json");
    var data = JSON.parse(dat);

    // configurations for 
    this.point = data.loc;
    this.linear = linear;
  }

  getDist(other) {
    // var miles = this.haversineDistance(this.point, other, true);
    // return miles * 5280;

    var pt1 = new google.maps.LatLng(point.y, point.x);
    var pt2 = new google.maps.LatLng(this.location.y, this.location.x);

    var distance = google.maps.geometry.spherical.computeDistanceBetween(pt1,pt2);       
  }

  // inverse square
  invsq(x) {
    var c = Level.max_score * Level.threshold ** 2 * Level.unit ** -1;
    return c*x**(-2);
  }

  // negative linear
  neglin(x) {
    var c = Level.unit / Level.step;
    var dist = (1 / Level.unit) * (Level.max_score + Level.unit - c*x);
    if(dist < 0) {
      return 0;
    }
    else {
      return dist;
    }
  }

  guess(pt) {
    return this.getPoints({
      x: pt.lng,
      y: pt.lat
    });
  }

  getPoints(coord) {
    var dist = this.getDist(coord);
    if (dist < Level.threshold) {
      return Level.max_score;
    }
    else {
      if (this.linear) {
        return Level.unit * Math.floor(this.neglin(dist));
      }
      else {
        return Level.unit * Math.floor(this.invsq(dist));
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
