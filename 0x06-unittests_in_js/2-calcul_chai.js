function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      throw new Error('Error');
    } else {
      return Math.round(a) / Math.round(b);
    }
  }
}
module.exports = calculateNumber;
