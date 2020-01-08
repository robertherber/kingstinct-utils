function clamp(min: number, number: number, max: number): number {
  return Math.min(Math.max(number, min), max);
}

export default clamp;
