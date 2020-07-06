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

// 3./* 
/* class Clock{
    constructor(date=new Date()){
        this.timer = null;
        this.date = date;
        this.h = date.getHours();
        this.m = date.getMinutes();
        this.s = date.getSeconds();
        this.stop = function() {
            clearInterval(timer);
        };
        this.start = function() {
            timer = setInterval(date, 1000);
        };
    }
}

let myTime = new Clock();
console.log(myTime.hour);
console.log(myTime);
myTime.start(); 
 */

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