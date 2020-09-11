export function handleDraw(board) {
    let index = 0;
    /*if ((board[1] === "X" || board[1] === "Y") &&
        (board[2] === "X" || board[2] === "Y") &&
        (board[3] === "X" || board[3] === "Y") &&
        (board[4] === "X" || board[4] === "Y") &&
        (board[5] === "X" || board[5] === "Y") &&
        (board[6] === "X" || board[6] === "Y") &&
        (board[7] === "X" || board[7] === "Y") &&
        (board[8] === "X" || board[8] === "Y") &&
        (board[9] === "X" || board[9] === "Y")) {
        return board[1];
    }*/
    for (var i = 1; i <= board.length; i++) {
        if (board[i] !== "") {
            index = index + 1;
        } 
    }
    //console.log(index);
    //index = 0;
    if (index === 9) {
        return board[0];
    }
    return null;  
}

