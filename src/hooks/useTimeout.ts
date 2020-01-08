import { useEffect } from 'react';

const useTimeout = (cb: () => void, ms: number): void => {
  useEffect(() => {
    if (Number.isFinite(ms)) {
      const handle = setTimeout(cb, ms);
      const unsubscribe = (): void => clearTimeout(handle);
      return (): void => unsubscribe();
    }
    return (): void => {};
  }, [ms, cb]);
};

export default useTimeout;
