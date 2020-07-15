//https://www.goconqr.com/c/60777/course_modules/90828-object-iteration?=#
'use strict';

const personInGermany = {
    firstName: 'Lucas',
    lastName: 'Smith',
    age: 39,
    yearsOfResidence: 10,
    nationality: 'Slovenian',
    profession: 'dj',
    salary: 2.000,
    method: function () {
        if (this.yearsOfResidence >= 7) {
            this.nationality = 'German';
        }
    }
}

personInGermany.method();

console.log(personInGermany.nationality);


const person1 = {
    firstName: 'Leonardo',
    lastName: 'Dicaprio',
    bankAccount: 1350,
    residence: 'Italy',
    homeCountry: 'Greece',
    correspondence: 0.89,
    currency: function () {
        this.inMyCountry = this.bankAccount * this.correspondence;
    }
}

person1.currency();
console.log(person1);

const person2 = {
    firstName: 'Bruce',
    lastName: 'Willis',
    bankAccount: 87000,
    residence: 'USA',
    homeCountry: 'Switzerland',
    correspondence: 0.94,
    currency: function () {
        this.inMyCountry = this.bankAccount * this.correspondence;
    }
}
person2.currency();
console.log(person2);


const person3 = {
    firstName: 'Johnny',
    lastName: 'Depp',
    bankAccount: 40,
    residence: 'Canada',
    homeCountry: 'Australia',
    correspondence: 1.44,
    currency: function () {
        this.inMyCountry = this.bankAccount * this.correspondence;
    }
}
person3.currency();
console.log(person3);


// make a class
class PersonClass {
    constructor(firstName, lastName, bankAccount, residence, homeCountry, correspondence) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bankAccount = bankAccount;
        this.residence = residence;
        this.homeCountry = homeCountry;
        this.correspondence = correspondence;
        this.currency = function () {
            this.inMyCountry = this.bankAccount * this.correspondence;
        }
    }
}

const personLeo = new PersonClass('Leonardo', 'dicaprio', 1350, 'Italy', 'Greece', 0.89);
console.log(personLeo);
personLeo.currency();
console.log(personLeo);

const personBruce = new PersonClass('Bruce', 'Willis',
    87000, 'USA', 'Switzerland', 0.94);
console.log(personBruce);
personBruce.currency();
console.log(personBruce);


const personJohnny = new PersonClass('Johnny', 'Depp', 40, 'Canada', 'Australia', 1.44);
personJohnny.currency();
console.log(personJohnny);


// tigers

class AllSpecies {
    constructor(species, numberOffEyes, numberOffLegs, hasTail) {
        this.species = species;
        this.numberOffEyes = numberOffEyes;
        this.numberOffLegs = numberOffLegs;
        this.hasTail = hasTail;
    }
}

class Tiger extends AllSpecies {
    constructor(colorFur, eyeColor, region, eatMeet) {
        super('tiger', 2, 4, true);
        this.colorFur = colorFur;
        this.eyeColor = eyeColor;
        this.region = region;
        this.eatMeet = eatMeet;
    }
    print() {
        console.log(this.colorFur);
    }
}

class BengalTiger extends Tiger {
    constructor(name, age, height, length, gender) {
        super('Orange-black', 'brown', 'India', true);
        this.name = name;
        this.age = age;
        this.height = height;
        this.length = length;
        this.gender = gender;
    }
}

class SiberianTiger extends Tiger {
    constructor(name, age, height, length, gender) {
        super('Black-white', 'blue', 'Siberia', false);
        this.name = name;
        this.age = age;
        this.height = height;
        this.length = length;
        this.gender = gender;
    }
}

const richard = new BengalTiger('Richard Parker', 15, 82, 226, 'male');
const NightKing = new SiberianTiger('The Nights King', 990, 88, 204, 'White Walker');
console.log(richard);
console.log(NightKing);

NightKing.print();