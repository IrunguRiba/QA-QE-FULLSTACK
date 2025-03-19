// bowlingGame.ts
const strike = document.getElementById("strike") as HTMLButtonElement;
const spare = document.getElementById("spare") as HTMLButtonElement;
const miss = document.getElementById("miss") as HTMLButtonElement;
const scoreBoard = document.getElementById("scoresBoard") as HTMLElement;
const play = document.getElementById("play") as HTMLButtonElement;

let rolls: number[] = []; // All the rolls in the game
let currentFrame: number = 1; // Keep track of the current frame
let rollIndex: number = 0; // Index to track the current roll in the rolls array
let score: number = 0; // Total score

const updateScoreBoard = (): void => {
  scoreBoard.innerText = `Score: ${score} (Frame: ${currentFrame})`;

  if (currentFrame > 10) {
    play.textContent = "Game Over";
  } else {
    play.textContent = "Continue";
  }
};

const calculateScore = (): void => {
  score = 0;
  let frameIndex = 0;

  for (let frame = 1; frame <= 10; frame++) {
    if (rolls[frameIndex] === undefined) break;

    if (rolls[frameIndex] === 10) {
      score += 10 + (rolls[frameIndex + 1] || 0) + (rolls[frameIndex + 2] || 0);
      frameIndex++;
    } else if (rolls[frameIndex] + rolls[frameIndex + 1] === 10) {
      score += 10 + (rolls[frameIndex + 2] || 0);
      frameIndex += 2;
    } else {
      score += rolls[frameIndex] + rolls[frameIndex + 1];
      frameIndex += 2;
    }
  }
};

strike.addEventListener("click", () => {
  if (currentFrame > 10) return;

  rolls.push(10);
  rollIndex++;
  calculateScore();
  updateScoreBoard();
  currentFrame = Math.min(Math.floor(rollIndex / 2) + 1, 10);
});

spare.addEventListener("click", () => {
  if (currentFrame > 10) return;

  rolls.push(5);
  rolls.push(5);
  rollIndex += 2;
  calculateScore();
  updateScoreBoard();
  currentFrame = Math.min(Math.floor(rollIndex / 2) + 1, 10);
});

miss.addEventListener("click", () => {
  if (currentFrame > 10) return;

  rolls.push(0);
  rollIndex++;

  calculateScore();
  updateScoreBoard();
  currentFrame = Math.min(Math.floor(rollIndex / 2) + 1, 10);
});

function reset(): void {
  play.addEventListener("click", () => {
    rolls = [];
    rollIndex = 0;
    score = 0;
    currentFrame = 1;
    updateScoreBoard();
  });
}

reset();

export { strike, spare, miss, scoreBoard, play, rolls, currentFrame, score, updateScoreBoard, calculateScore };
