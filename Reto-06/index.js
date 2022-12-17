function createCube(size) {
  let head = [];
  let tail = [];

  for (let i = 1; i <= size; i++) {
    head.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size));
    tail.push(
      " ".repeat(0 + i) + "\\/".repeat(size - i + 1) + "_/".repeat(size)
    );
  }
  return [...head, ...tail].join("\n");
}

console.log(createCube(1));
console.log(createCube(2));
console.log(createCube(3));
