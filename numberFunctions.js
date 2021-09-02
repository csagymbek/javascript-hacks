const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
console.log(numberWithCommas(22200000));

const compactNumber = (number) => {
  const suffixes = ["", "k", "m", "b", "t"];
  const suffixNum = Math.floor(("" + number).length / 3);
  let shortVal = parseFloat(
    suffixNum != 0 ? number / Math.pow(1000, suffixNum) : number
  ).toPrecision(2);
  if (shortVal % 1 != 0) {
    shortVal = shortVal.toFixed(1);
  }
  return shortVal + suffixes[suffixNum];
};
console.log(compactNumber(22200000));

const ordinalSuffix = (number) => {
  let j = number % 10,
    k = number % 100;
  if (j == 1 && k != 11) {
    return `${number}st`;
  }
  if (j == 2 && k != 12) {
    return `${number}nd`;
  }
  if (j == 3 && k != 13) {
    return `${number}rd`;
  }
  return `${number}th`;
};
console.log(ordinalSuffix(1));
console.log(ordinalSuffix(2));
console.log(ordinalSuffix(3));
console.log(ordinalSuffix(4));

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomInt(0, 100));
