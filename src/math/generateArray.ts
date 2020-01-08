
function generateArray<T>(length: number, itemAt: (index) => T = undefined): Array<T> {
  const arr = new Array(length);
  return itemAt ? arr.map(itemAt) : arr;
}

export default generateArray;
