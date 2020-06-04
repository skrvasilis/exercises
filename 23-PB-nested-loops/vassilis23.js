for (let i = 1; i<=10; i++) {
    let space = '';
    for (let j = i; j<10; j++) {
        space += ' ';
    }
    for (let k = 0; k<(i*2) - 1; k++) {
    space += '*';
    }
    console.log(space);
}