export class BowlingScoreCalculator {
  private rolls: Array<number> = []

  roll(rollScore: number) {
    this.rolls.push(rollScore)
  }
  
  score(): number {
    let totalScore = 0
    for (let i = 0; i < this.rolls.length; i++) {
      totalScore = totalScore + this.rolls[i]
      if (this.isEndOfFrame(i)) {
        if (this.isSpare(i)) {
          totalScore = totalScore + this.rolls[i+1]  
        }
      }
    }

    return totalScore;
  }
  
  private isSpare(i: number) {
    return this.rolls[i] + this.rolls[i - 1] === 10
  }

  private isEndOfFrame(rollIndex: number) {
    return rollIndex % 2 === 1
  }

}
