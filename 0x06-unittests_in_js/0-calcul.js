function calculateNumber(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Enter a number');
  }
  return Math.round(Number(a)) + Math.round(Number(b));
}

module.exports = calculateNumber;
