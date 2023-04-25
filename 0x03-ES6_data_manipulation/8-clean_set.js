export default function cleanSet(set, startString) {
  const result = [];
  if (startString.length === 0) {
    return '';
  }
  set.forEach((item) => {
    if (item && item.startsWith(startString)) {
      const newWord = item.split(startString)[1];
      result.push(newWord);
    }
  });
  return result.join('-');
}
