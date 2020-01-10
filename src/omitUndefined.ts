
const omitUndefinedObject = <T>(obj: Record<string, T>): Record<string, T> => {
  const cleanObj = {};
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val !== undefined) {
      cleanObj[key] = val;
    }
  });
  return cleanObj;
};

const omitUndefinedArray = <T>(obj: (T)[]): (T)[] => {
  const cleanArr = [];
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val !== undefined) {
      cleanArr.push(val);
    }
  });
  return cleanArr;
};

const omitUndefined = <T>(
  arrOrObj: Record<string, T> | Array<T>,
): Record<string, T> | Array<T> => (Array.isArray(arrOrObj)
    ? omitUndefinedArray(arrOrObj)
    : omitUndefinedObject(arrOrObj));

export default omitUndefined;
