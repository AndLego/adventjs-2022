function checkPart(part) {
  return [...part].some((l, i, arr) => {
    let w = arr.filter((_, y) => y != i);
    return w.join("") == w.reverse().join("");
  });
}

console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));
console.log(checkPart("eye"));
