const { expect } = require("chai")
const { BowlingScoreCalculator } = require('../src/BowlingScoreCalculator')

// 10 frames, 10 pins
// one or two rolls per frame
// strike is 10 + pins knocked down in the next two rolls
// spare is 10 + pins knocked down in the next roll
// otherwise sum the pins knocked down on the 2 rolls
// 10th frame: if you roll a strike or spare you get three total rolls. The score is the sum of the pins knocked down in the rolls
// 300 is perfect

// Assume: The score calculator is provided with the correct number of rolls and pins knocked down
// Assume: For each roll we tell the calculator how many pins were knocked down
// Assume: We only need to calculate the score at the end, once the game is over

describe("bowling score calculator", () => {

})
