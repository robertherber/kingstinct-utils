function replaceAtIndex<T>(array: Array<T>, index: number, value: T): Array<T> {
  return Object.assign([], array, { [index]: value });
}

export default replaceAtIndex;
