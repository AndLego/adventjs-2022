function countHours(year, holidays) {
  let extra = 0;
  let days = holidays.map((day) => {
    if (
      new Date(`${year}/${day}`).getDay() !== 0 &&
      new Date(`${year}/${day}`).getDay() !== 6
    ) {
      return (extra += 2);
    }
  });
  return extra;
}

console.log(countHours(2023, ["01/06", "04/01", "12/25"]));
console.log(
  countHours(1985, [
    "01/01",
    "01/06",
    "02/02",
    "02/17",
    "02/28",
    "06/03",
    "12/06",
    "12/25",
  ])
);
console.log(countHours(2000, ["01/01"]));
