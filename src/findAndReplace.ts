import replaceAtIndex from './replaceAtIndex';

// type replaceWithType = <T>;

function findAndReplace<T>(array: Array<T>, compare: (T) => boolean, replaceWith: T): Array<T> {
  const index = array.findIndex(compare);

  if (index > -1) {
    const newObj = replaceWith instanceof Function ? replaceWith(array[index]) : replaceWith;
    return replaceAtIndex(array, index, newObj);
  }

  return array;
}

export default findAndReplace;
