'use strict';

// 1.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name},${this.age} years old`;
    }
}

let vasilis = new Person('vasilis', 33);
console.log(vasilis);
console.log(vasilis.describe());


// 2
class Cylinder {
    constructor(r, h) {
        this.r = r;
        this.h = h
    }
    volume = function () {
        return (Math.PI * Math.pow(this.r, 2) * this.h).toFixed(4);
    }
}
let myCylinder = new Cylinder(2, 4);
console.log(myCylinder.volume());

// 3.
class Clock {
    constructor({
      template
    }) {
      this.template = template
      this.timer;
    }
    render() {
      let date = new Date()
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
    stop() {
      clearInterval(this.timer);
    };
  
    start() {
      this.timer = setInterval(this.render.bind(this), 1000);
    };
  }
  let clock = new Clock({
    template: 'h:m:s'
  });
  clock.start();

// 4

class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    volumeUp() {
        if (this.volume < 100) {
            this.volume++;
            console.log('volume up', this.volume);
        } else {
            console.log('you reached the volume limit');
        }
    }
    volumeDown() {
        if (this.volume >= 0) {
            this.volume--;
            console.log('volume down', this.volume);
        } else {
            console.log('you reached the volume limit');
        }
    }
    channelMethod = function () {
        this.channel = Math.floor(Math.random() * Math.floor(50));
    }
    print() {
        return `${this.brand} at chanel ${this.channel}, volume ${this.volume}`;
    }
    reset() {
        this.volume = 50;
        this.channel = 1;
    }
}


let myChanel = new TV('sony');
myChanel.channelMethod();
myChanel.volumeUp();
myChanel.volumeUp();
myChanel.volumeUp();
myChanel.volumeUp();
console.log(myChanel.channel);
console.log(myChanel.volume);
console.log(myChanel.print());
myChanel.reset();
console.log(myChanel.print());