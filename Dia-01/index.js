function wrapping(gifts) {
    function papel(n) {
      if (n <= 0) {
        return "";
      }
      return "*" + papel(n - 1);
    }

    return gifts.map(
      (item) =>
        `${papel(item.length + 2)}\n*${item}*\n${papel(item.length + 2)}`
    );
  }

  console.log(wrapping(['cat', 'game', 'socks']));
  console.log(wrapping(["a"]));
  console.log(wrapping([]));