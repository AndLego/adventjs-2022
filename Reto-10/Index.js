function checkJump(heights) {
  // Obtenemos el índice del elemento más alto
  const maxHeightIndex = heights.indexOf(Math.max(...heights));

  // Separamos el array en dos partes: a la izquierda y a la derecha del elemento más alto
  const left = heights.slice(0, maxHeightIndex);
  const right = heights.slice(maxHeightIndex + 1);

  //revisamos si solo asciende o desciende
  if (left.length === 0 || right.length === 0) {
    return false;
  }

  // Verificamos si cada elemento de la parte izquierda es mayor o igual al anterior
  // y cada elemento de la parte derecha es menor o igual al anterior
  const leftIsValid = left.slice(1).every((h, i) => h >= left[i]);
  const rightIsValid = right.slice(1).every((h, i) => h <= right[i]);

  // Si ambas partes son válidas, retornamos true; de lo contrario, false
  return leftIsValid && rightIsValid;
}
console.log(checkJump([1, 3, 8, 5, 2])); // true

console.log(checkJump([1, 7, 3, 5])); // false
