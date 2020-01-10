const omitNullObject = <T>(obj: Record<string, T>): Record<string, T> => {
  const cleanObj = {};
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val !== null) {
      cleanObj[key] = val;
    }
  });
  return cleanObj;
};

const omitNullArray = <T>(obj: (T)[]): (T)[] => {
  const cleanArr = [];
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val !== null) {
      cleanArr.push(val);
    }
  });
  return cleanArr;
};

const omitNull = <T>(
  arrOrObj: Record<string, T> | Array<T>,
): Record<string, T> | Array<T> => (Array.isArray(arrOrObj)
    ? omitNullArray(arrOrObj)
    : omitNullObject(arrOrObj));

export default omitNull;
