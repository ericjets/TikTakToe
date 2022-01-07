const squares = document.querySelectorAll('.board-btn');
const resultPopUp = document.querySelector('#resultPopUp');
let isGameOver = null;
let turnCount = 0;

function btn_click(x) {
    x.textContent = "X";
    x.style.color = "white";
    x.disabled = "true";
    turnCount++;

    isGameOver = checkForWinner();

    ai_turn(isGameOver);
    turnCount++;
}

function checkForWinner() {
    if ((squares[0].textContent == 'X' && squares[1].textContent == 'X' && squares[2].textContent == 'X') ||
        (squares[0].textContent == 'X' && squares[4].textContent == 'X' && squares[8].textContent == 'X') ||
        (squares[0].textContent == 'X' && squares[3].textContent == 'X' && squares[6].textContent == 'X') ||
        (squares[1].textContent == 'X' && squares[4].textContent == 'X' && squares[7].textContent == 'X') ||
        (squares[2].textContent == 'X' && squares[4].textContent == 'X' && squares[6].textContent == 'X') ||
        (squares[2].textContent == 'X' && squares[5].textContent == 'X' && squares[8].textContent == 'X') ||
        (squares[3].textContent == 'X' && squares[4].textContent == 'X' && squares[5].textContent == 'X') ||
        (squares[6].textContent == 'X' && squares[7].textContent == 'X' && squares[8].textContent == 'X'))
    {
        squares.forEach(function (currentValue, currentIndex, listObj) {
            currentValue.disabled = "true";
        });
        resultPopUp.style.backgroundColor = "green";
        resultPopUp.hidden = false;
        return true;
    }
    else if((squares[0].textContent == 'O' && squares[1].textContent == 'O' && squares[2].textContent == 'O') ||
            (squares[0].textContent == 'O' && squares[4].textContent == 'O' && squares[8].textContent == 'O') ||
            (squares[0].textContent == 'O' && squares[3].textContent == 'O' && squares[6].textContent == 'O') ||
            (squares[1].textContent == 'O' && squares[4].textContent == 'O' && squares[7].textContent == 'O') ||
            (squares[2].textContent == 'O' && squares[4].textContent == 'O' && squares[6].textContent == 'O') ||
            (squares[2].textContent == 'O' && squares[5].textContent == 'O' && squares[8].textContent == 'O') ||
            (squares[3].textContent == 'O' && squares[4].textContent == 'O' && squares[5].textContent == 'O') ||
            (squares[6].textContent == 'O' && squares[7].textContent == 'O' && squares[8].textContent == 'O'))
    {
        squares.forEach(function (currentValue, currentIndex, listObj) {
            currentValue.disabled = "true";
        });
        resultPopUp.style.backgroundColor = "green";
        resultPopUp.hidden = false;
        return true;
    }
    else if(turnCount == 9)
    {
        resultPopUp.textContent = "DRAW !!!";
        resultPopUp.style.backgroundColor = "orange";
        resultPopUp.hidden = false;
        return true;
    }
    else
    {
        return false;
    }
}

function ai_turn(isGameOver) {
    const openSpaces = [];
    let ai_choice = -1;

    if (isGameOver === false) {
        for (let i = 0; i < squares.length; i++){
            if (squares[i].textContent == "") {
                openSpaces.push(squares[i]);
            }
        }
        console.log(openSpaces.length);
        ai_choice = Math.floor(Math.random() * openSpaces.length);
        console.log(ai_choice);
        openSpaces[ai_choice].textContent = 'O';
        openSpaces[ai_choice].style.color = "blue";
    }
    isGameOver = checkForWinner();
}
// function ai_turn(isGameOver) {
//     if (isGameOver == false) {
//         const buttonNumbers = [1, 2, 3, 4, 5 , 6, 7, 8, 9];
//         const openSpaces = document.querySelectorAll(".board-btn");
    
//         let isValidChoice = false;
//         let randomNumber = null;
//         while (isValidChoice == false) {
//             randomNumber = Math.floor(Math.random() * 9);
//             console.log(randomNumber);
//             if (openSpaces[randomNumber].disabled === false) {
//                 isValidChoice = true;
//             }
//         }
    
//         openSpaces[randomNumber].textContent = "O";
//         openSpaces[randomNumber].style.color = "white";
//         openSpaces[randomNumber].disabled = "true";
//     }

// }