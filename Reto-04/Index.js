function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => {
      if (a.l > b.l && a.w > b.w && a.h > b.h) {
        return 1;
      }
      if (a.l < b.l && a.w < b.w && a.h < b.h) {
        return -1;
      }
      return 0;
    })
    .every((box, index) => {
      if (index === 0) return true;
      let prevBox = boxes[index - 1];
      return box.l > prevBox.l && box.w > prevBox.w && box.h > prevBox.h;
    });
}

const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

console.log(fitsInOneBox(boxes1)); // true
console.log(fitsInOneBox(boxes2)); // false
