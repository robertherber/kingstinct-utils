function replaceAtIndex<T>(index: number, value: T, array: Array<T>): Array<T> {
  return Object.assign([], array, { [index]: value });
}

export default replaceAtIndex;
