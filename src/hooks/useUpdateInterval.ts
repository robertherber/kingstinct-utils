import { useState, useEffect } from 'react';

const intervals = {};

type UnsubscribeFunction = () => void;

export const sharedSetInterval = <T>(cb: (now: number) => T, ms: number): UnsubscribeFunction => {
  let activeInterval = intervals[ms];
  if (!activeInterval) {
    intervals[ms] = {
      listeners: [cb],
      ref: setInterval(() => {
        const now = Date.now();
        intervals[ms].listeners.forEach((l) => l(now));
      }, ms),
    };
    activeInterval = intervals[ms];
  } else {
    activeInterval.listeners = [...intervals[ms].listeners, cb];
  }

  return (): void => {
    activeInterval.listeners = activeInterval.listeners.filter((l) => l !== cb);
    if (activeInterval.listeners.length === 0) {
      clearInterval(activeInterval.ref);
      delete intervals[ms];
    }
  };
};

export const useUpdateInterval = <T>(render: (now: number) => T, ms: number): T => {
  const [value, setValue] = useState(render(Date.now()));

  useEffect(() => {
    if (Number.isFinite(ms)) {
      const cb = (now): void => {
        setValue(render(now));
      };
      const unsubscribe = sharedSetInterval(cb, ms);
      return (): void => unsubscribe();
    }
    return (): void => {};
  }, [ms, render]);

  return value;
};

export default useUpdateInterval;
