import replaceAtIndex from './replaceAtIndex';

function findAndReplace<T>(
  findPredicate: (T) => boolean,
  replaceWith: (T | ((T) => T)),
  array: Array<T>,
): Array<T> {
  const index = array.findIndex(findPredicate);

  if (index > -1) {
    const newObj = replaceWith instanceof Function ? replaceWith(array[index]) : replaceWith;
    return replaceAtIndex(index, newObj, array);
  }

  return array;
}

export default findAndReplace;
