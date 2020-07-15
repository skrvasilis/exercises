class AllSpecies {
    constructor(species, numberOffEyes, numberOffLegs, hasTail) {
        this.species = species;
        this.numberOffEyes = numberOffEyes;
        this.numberOffLegs = numberOffLegs;
        this.hasTail = hasTail;
    }
}

class Tiger extends AllSpecies {
    constructor(colorFur, eyeColor, region, eatMeet, name, age, height, length, gender) {
        super('tiger', 2, 4, true);
        this.colorFur = colorFur;
        this.eyeColor = eyeColor;
        this.region = region;
        this.eatMeet = eatMeet;
        this.name = name;
        this.age = age;
        this.height = height;
        this.length = length;
        this.gender = gender;
    }
    print() {
        console.log(this.colorFur);
    }
}

class BengalTiger extends Tiger {
    constructor(name, age, height, length, gender) {
        super('Orange-black', 'brown', 'India', true, name, age, height, length, gender);
    }
}

class SiberianTiger extends Tiger {
    constructor(name, age, height, length, gender) {
        super('Black-white', 'blue', 'Siberia', false, name, age, height, length, gender);
    }
}

const richard = new BengalTiger('Richard Parker', 15, 82, 226, 'male');
const NightKing = new SiberianTiger('The Nights King', 990, 88, 204, 'White Walker');
console.log(richard);
console.log(NightKing);

NightKing.print();