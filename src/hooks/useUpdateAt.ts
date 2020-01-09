import { useState, useEffect, useRef } from 'react';

const intervals = {};

type UnsubscribeFunction = () => void;

export const sharedSetTimeout = <T>(
  cb: (now: number) => T,
  at: number | Date,
): UnsubscribeFunction => {
  const ms = at.valueOf() - Date.now();

  let activeTimeout = intervals[ms];
  if (!activeTimeout) {
    intervals[ms] = {
      listeners: [cb],
      ref: setTimeout(() => {
        const now = Date.now();
        intervals[ms].listeners.forEach((l) => l(now));
      }, ms),
    };
    activeTimeout = intervals[ms];
  } else {
    activeTimeout.listeners = [...intervals[ms].listeners, cb];
  }

  return (): void => {
    activeTimeout.listeners = activeTimeout.listeners.filter((l) => l !== cb);
    if (activeTimeout.listeners.length === 0) {
      clearInterval(activeTimeout.ref);
      delete intervals[ms];
    }
  };
};

const useUpdateAt = <T>(updaterFn: (now: number) => T, at: number | Date): T => {
  const [value, setValue] = useState(updaterFn(Date.now()));
  const updater = useRef(updaterFn);

  useEffect(() => {
    updater.current = updaterFn;
  }, [updaterFn]);

  useEffect(() => {
    if (at) {
      const cb = (now): void => {
        setValue(updater.current(now));
      };
      const unsubscribe = sharedSetTimeout(cb, at);
      return (): void => unsubscribe();
    }
    return (): void => {};
  }, [at]);

  return value;
};

export default useUpdateAt;
