
let mySize = 8;
for (let i = 1; i <= mySize; i++) {
    let space = '';
    for (let j = 0; j < i - 1; j++) {
        space += ' ';
    }
    for (let k = mySize+5; k >(i * 2); k--) {
        space += '*';
    }
    console.log(space);
}
