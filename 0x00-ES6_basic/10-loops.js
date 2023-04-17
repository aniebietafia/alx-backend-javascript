export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx of array) {
    result.push(appendString + idx);
  }

  return result;
}
