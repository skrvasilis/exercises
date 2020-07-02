'use strict';

// 1.(

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.describe = function () {
            return `${name},${age} years old`
        }
    }
}

let vasilis = new Person('vasilis', 33);
console.log(vasilis.describe());


// 2
class Cylinder {
    constructor(r, h, p = Math.PI) {
        this.r = r;
        this.h = h;
        this.p = p;
        this.volume = function () {
            return (p * Math.pow(r, 2) * h).toFixed(4)
        }
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
    constructor(brand, volume = 50, channel = 1) {
        this.brand = brand;
        this.channel = channel;
        this.volume = 50;
        this.channelMethod = function (max) {
            this.channel = Math.floor(Math.random() * Math.floor(max));
        }
    }
}


let myChanel = new TV('sony');
myChanel.channelMethod(50);
console.log(myChanel.channel);