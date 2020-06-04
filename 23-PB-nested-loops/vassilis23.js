for (let i = 1; i <= 10; i++) {
    let space = '';
    for (let j = 0; j < i - 1; j++) {
        space += ' ';
    }
    for (let k = 21; k > (i * 2); k--) {
        space += '*';
    }
    console.log(space);
}