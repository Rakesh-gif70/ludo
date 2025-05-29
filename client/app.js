const socket = io();

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').textContent = "You rolled: " + roll;
    socket.emit('diceRolled', roll);
}

socket.on('playerRolled', (data) => {
    console.log("Other player rolled:", data);
});
