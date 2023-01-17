module.exports = function reverse (n) {
  const arrayNumber = Math.abs(n).toString().split("");
  const reverseNumber = Number(arrayNumber.reverse().join(""));
  return reverseNumber;
}
