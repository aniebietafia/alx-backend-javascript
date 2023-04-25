function hasValuesFromArray(set, array) {
  const result = array.every((item) => set.has(item));
  return result;
}

export default hasValuesFromArray;
