import { expect } from "chai"
import { BowlingScoreCalculator } from '../src/BowlingScoreCalculator'

// 10 frames, 10 pins
// one or two rolls per frame
// strike is 10 + pins knocked down in the next two rolls
// spare is 10 + pins knocked down in the next roll
// otherwise sum the pins knocked down on the 2 rolls
// 10th frame: if you roll a strike or spare you get three total rolls. 
//   The score is the sum of the pins knocked down in the rolls
// 300 is perfect

// Assume: The score calculator is provided with the correct number of rolls and pins knocked down
// Assume: For each roll we tell the calculator how many pins were knocked down
// Assume: We only need to calculate the score at the end, once the game is over


// 0. No pins --> 0
// 1. No strikes or spares
// 2. There's a spare
// 2. There's a strike
// 2. Perfect game --> 300

describe("bowling score calculator", () => {
  let subject: BowlingScoreCalculator

  beforeEach(() => {
    subject = new BowlingScoreCalculator();
  })

  context("when all gutter balls are thrown", () => {
    it("returns a score of zero", () => {
      rollFrames(0, 0, 10)

      expect(subject.score()).to.equal(0)
    })
  })

  context("when no strikes or spares are thrown", () => {
    it("returns the sum of all the throws", () => {
      rollFrames(3, 2, 10)

      expect(subject.score()).to.equal(50)
    })
  })

  context("when there's a spare", () => {
    it("counts the next roll after the spare twice", () => {
      subject.roll(8)
      subject.roll(2)
      subject.roll(7)
      subject.roll(3)
      rollFrames(3, 2, 7)
      subject.roll(1)
      subject.roll(1)

      expect(subject.score()).to.equal(10 + 7 + 10 + 3 + (7 * 5) + 2)
    })
  })

  const rollFrames = (firstRoll: number, secondRoll: number, numberOfFrames: number) => {
    for (let i = 0; i < numberOfFrames; i++) {
      subject.roll(firstRoll)
      subject.roll(secondRoll)
    }
  }
})

