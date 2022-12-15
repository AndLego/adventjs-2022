function getGiftsToRefill(a1, a2, a3) {
  let reponer = [];
  let newArr = [...new Set([...a1, ...a2, ...a3])];

  newArr.forEach((item) => {
    if (!a1.includes(item) && !a2.includes(item) && a3.includes(item)) {
      reponer.push(item);
    }
    if (!a1.includes(item) && a2.includes(item) && !a3.includes(item)) {
      reponer.push(item);
    }
    if (a1.includes(item) && !a2.includes(item) && !a3.includes(item)) {
      reponer.push(item);
    }
  });
  return (reponer = reponer.filter(
    (item, index) => reponer.indexOf(item) === index
  ));
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

const gifts = getGiftsToRefill(a1, a2, a3);

gifts;
