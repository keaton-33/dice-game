const dotList = document.querySelectorAll(".dot");

function setIndex(player) {
    let startingIndex = 0;
    if (player === 2) {
        startingIndex += 7;
    }
    return startingIndex;
}

function showDice(player, dice) {
    let index = setIndex(player);
    let centerDot = dotList[index];
    let dot1 = dotList[index + 1];
    let dot2 = dotList[index + 2];
    let dot3 = dotList[index + 3];
    let dot4 = dotList[index + 4];
    let dot5 = dotList[index + 5];
    let dot6 = dotList[index + 6];

    if (dice === 1 || dice === 3 || dice === 5) {centerDot.style.visibility = "visible";}
    else {centerDot.style.visibility = "hidden";}

    if (dice === 4 || dice === 5 || dice === 6) {dot1.style.visibility = "visible";}
    else {dot1.style.visibility = "hidden";}

    if (dice === 2 || dice === 3 || dice === 4 || dice === 5 || dice === 6) {dot2.style.visibility = "visible";}
    else {dot2.style.visibility = "hidden";}

    if (dice === 6) {dot3.style.visibility = "visible";}
    else {dot3.style.visibility = "hidden";}

    if (dice === 6) {dot4.style.visibility = "visible";}
    else {dot4.style.visibility = "hidden";}

    if (dice === 2 || dice === 3 || dice === 4 || dice === 5 || dice === 6) {dot5.style.visibility = "visible";}
    else {dot5.style.visibility = "hidden";}

    if (dice === 4 || dice === 5 || dice === 6) {dot6.style.visibility = "visible";}
    else {dot6.style.visibility = "hidden";}
}

function rollDice() {
    let num1 = Math.floor(Math.random() * 6 + 1);
    let num2 = Math.floor(Math.random() * 6 + 1);
    while (num1 === num2) {
        num1 = Math.floor(Math.random() * 6 + 1);
    }

    showDice(1, num1);
    showDice(2, num2);

    if (num1 > num2) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else {
        document.querySelector("h1").textContent = "Player 2 Wins";
    }
}