function fitsInOneBox(boxes) {
   const sortBoxes = boxes.sort((a, b) => a.l - b.l)

   const someSize = (box, index) => {
    if(index === 0) {
      return true
    }
    const prevBox = sortBoxes[index-1];
    return prevBox.l < box.l && prevBox.w < box.w && prevBox.h < box.h
  }
  return sortBoxes.every(someSize)
}
