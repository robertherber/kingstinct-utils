import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from 'react';

import usePrevious from './usePrevious';

test('should be undefined', () => {
  const { result } = renderHook(() => usePrevious(999));

  expect(result.current).toBe(undefined);
});

const useStateWithPrevious = <T>(initialValue: T): [T, (T) => void, T | undefined] => {
  const [value, setValue] = useState(initialValue);

  const previousValue = usePrevious(value);

  return [value, setValue, previousValue];
};

test('should be 42', () => {
  const { result } = renderHook(() => useStateWithPrevious(42));

  act(() => {
    result.current[1](0);
  });

  expect(result.current[2]).toBe(42);
});


test('should be 0', () => {
  const { result } = renderHook(() => useStateWithPrevious(0));

  act(() => {
    result.current[1](42);
  });

  expect(result.current[2]).toBe(0);
});

test('should be 444', () => {
  const { result } = renderHook(() => useStateWithPrevious(42));

  act(() => {
    result.current[1](0);
  });

  act(() => {
    result.current[1](42);
  });

  act(() => {
    result.current[1](444);
  });

  act(() => {
    result.current[1](111);
  });

  expect(result.current[2]).toBe(444);
});
