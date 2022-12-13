const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)); // 2

function distributeGifts(packOfGifts, reindeers) {
  let pesoregalos = 0;
  packOfGifts.forEach((gift) => (pesoregalos += gift.length));

  let capacidadRenos = 0;
  reindeers.forEach((reno) => (capacidadRenos += reno.length * 2));

  if (Math.floor(capacidadRenos / pesoregalos) === 0) {
    return 0;
  }

  return Math.floor(capacidadRenos / pesoregalos);
}
