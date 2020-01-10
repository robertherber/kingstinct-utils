function clamp(min: number, number: number, max: number): number {
  if (min > max) {
    throw new Error('clamp: min has to be less than max');
  }
  return Math.min(Math.max(number, min), max);
}

export default clamp;
