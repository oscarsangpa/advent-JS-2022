function distributeGifts(packOfGifts, reindeers) {
  const giftWeight = packOfGifts.reduce(
    (weight, gift) => {
      return weight + gift.length 
    }, 0)
      

  const reindeersWeight = reindeers.reduce(
    (weight, reindeer) => {
      return weight + (reindeer.length * 2)
    }, 0)

  return Math.floor(reindeersWeight / giftWeight)
}
