function replaceAtIndex<T>(index: number, value: T, array: T[]): T[] {
  return Object.assign([], array, { [index]: value });
}

export default replaceAtIndex;
