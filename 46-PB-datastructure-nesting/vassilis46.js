'use strict';

// 1.

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

function arrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
arrayValues(board);


// 2. 
const doggo = {
    name: 'Doggo',
    breed: '',
    favoriteFoods: ['burger', 'pizza', 'pasta'],
}
doggo.foods = function () {
    for (const item of this.favoriteFoods) {
        console.log('2.4', item);
    }
}
console.log('2.3', doggo.favoriteFoods[1]);
doggo.foods();

// 3.
const recipes = {
    ingredients: {
        butter: '100gr',
        sugar: '2 spoons',
        flour: '300gr'
    },
    values: function () {
        console.log(Object.values(this.ingredients));
    }
}

recipes.ingredients.ginger = '20gr';
console.log(recipes);

recipes.ingredients.brownSugar = recipes.ingredients.sugar;
delete recipes.ingredients.sugar;
console.log(recipes);
recipes.values();