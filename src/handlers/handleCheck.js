export function handleCheck(arrayKey) {
    //const youWin = false;

    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i <= 7; i++) {
        const winWin = winCombination[i];
        let x = arrayKey[winWin[0]];
        let y = arrayKey[winWin[1]];
        let z = arrayKey[winWin[2]];
        if (x === '' || y === '' || z === '') {
            continue;
        }
        if (x === y && y === z) {
            // youWin = true;
            return x;
          //  console.log(x)
            break;
        }
    }

    return null;
}

