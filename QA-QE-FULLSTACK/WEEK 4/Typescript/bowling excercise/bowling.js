var strike = document.getElementById("strike");
var spare = document.getElementById("spare");
var miss = document.getElementById("miss");
var scoreBoard = document.getElementById("scoresBoard");
var play = document.getElementById("play");
var rolls = []; // All the rolls in the game
var currentFrame = 1; // Keep track of the current frame
var rollIndex = 0; // Index to track the current roll in the rolls array
var score = 0; // Total score
// Function to update the scoreboard
var updateScoreBoard = function () {
    scoreBoard.innerText = "Score: ".concat(score, " (Frame: ").concat(currentFrame, ")");
    // Game over if 10 frames are completed
    if (currentFrame > 10) {
        play.textContent = "Game Over";
    }
    else {
        play.textContent = "Continue";
    }
};
// Function to calculate the score
var calculateScore = function () {
    score = 0; // Reset score before recalculating
    var frameIndex = 0;
    // Ensure there are enough rolls for the frames
    for (var frame = 1; frame <= 10; frame++) {
        if (rolls[frameIndex] === undefined)
            break; // Break if rolls aren't enough
        if (rolls[frameIndex] === 10) {
            // Strike: 10 + next two rolls
            score += 10 + (rolls[frameIndex + 1] || 0) + (rolls[frameIndex + 2] || 0);
            frameIndex++; // Skip the next roll since it's part of the strike
        }
        else if (rolls[frameIndex] + rolls[frameIndex + 1] === 10) {
            // Spare: 10 + next roll
            score += 10 + (rolls[frameIndex + 2] || 0);
            frameIndex += 2; // Move past both rolls of the spare
        }
        else {
            // Open frame: Sum of the two rolls
            score += rolls[frameIndex] + rolls[frameIndex + 1];
            frameIndex += 2;
        }
    }
};
strike.addEventListener("click", function () {
    if (currentFrame > 10)
        return; // Stop if the game is over
    rolls.push(10); // Add a strike to the rolls array
    rollIndex++;
    calculateScore(); // Update score after each roll
    updateScoreBoard();
    currentFrame = Math.min(Math.floor(rollIndex / 2) + 1, 10); // Update the current frame
});
spare.addEventListener("click", function () {
    if (currentFrame > 10)
        return; // Stop if the game is over
    rolls.push(5); // Add first roll for spare (you can customize as needed)
    rolls.push(5); // Add second roll for spare
    rollIndex += 2;
    calculateScore(); // Update score after each frame
    updateScoreBoard();
    currentFrame = Math.min(Math.floor(rollIndex / 2) + 1, 10); // Update the current frame
});
miss.addEventListener("click", function () {
    if (currentFrame > 10)
        return; // Stop if the game is over
    rolls.push(0); // Add a miss (0 points) to the rolls array
    rollIndex++;
    calculateScore(); // Update score after each roll
    updateScoreBoard();
    currentFrame = Math.min(Math.floor(rollIndex / 2) + 1, 10); // Update the current frame
});
// Function to reset the game
function reset() {
    play.addEventListener("click", function () {
        rolls = []; // Clear the rolls array
        rollIndex = 0;
        score = 0;
        currentFrame = 1;
        updateScoreBoard();
    });
}
reset();
