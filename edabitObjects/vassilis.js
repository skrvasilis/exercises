'use strict';

// 1 
const volumeOfABox = (sizes) => {
    return sizes.length * sizes.width * sizes.height;
}

console.log(volumeOfABox({
    width: 2,
    length: 5,
    height: 1
}));
console.log(volumeOfABox({
    width: 4,
    length: 2,
    height: 2
}));
console.log(volumeOfABox({
    width: 2,
    length: 3,
    height: 5
}));

// 2.
const cityFacts = (city) => {
    return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
})); // "Paris has a population of 2,140,526 and is situated in Europe"

console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
})); // "Tokyo has a population of 13,929,286 and is situated in Asia"


// 3.
function hasKey(obj, key) {
    return key in obj;
}

console.log(hasKey({
    a: 44,
    b: 45,
    c: 46
}, "d")); // false

console.log(hasKey({
    craves: true,
    midnight: true,
    snack: true
}, "morning")); // false

console.log(hasKey({
    pot: 1,
    tot: 2,
    not: 3
}, "not")); // true


// 4 
function profit(info) {
    const newLocal = info.sellPrice * info.inventory - info.costPrice * info.inventory;
    return Math.round(newLocal);
}

console.log(profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
})); // 14796

console.log(profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
})); // 32411

console.log(profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
})); // 44030



// 5 
const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    if (name in GUEST_LIST) {
        return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
    } else {
        return `Hi! I'm a guest.`;
    }
}

console.log(greeting("Randy")); // "Hi! I'm Randy, and I'm from Germany."

console.log(greeting("Sam")); // "Hi! I'm Sam, and I'm from Argentina."

console.log(greeting("Monti")); // "Hi! I'm a guest."



// 6
const gravitationalForce = {
    Mercury: 3.7,
    Venus: 8.87,
    Earth: 9.81,
    Mars: 3.711,
    Jupiter: 24.79,
    Saturn: 10.44,
    Uranus: 8.69,
    Neptune: 11.15
}

function spaceWeights(planetA, weight, planetB) {
    let result = weight / gravitationalForce[planetA] * gravitationalForce[planetB];
    // return result.toFixed(2);
    console.log(result);
    return Math.round(result*100)/100;
}

console.log(spaceWeights("Earth", 1, "Mars")); // 0.38

console.log(spaceWeights("Earth", 1, "Jupiter")); // 2.53

console.log(spaceWeights("Earth", 1, "Neptune")); // 1.14