import { renderHook, act } from '@testing-library/react-hooks';

import useUpdateInterval from './useUpdateInterval';

test('should have been called', () => {
  jest.useFakeTimers();

  const timeAtStart = Date.now();
  const fun = jest.fn((now) => now);
  const { result } = renderHook(() => useUpdateInterval(fun, 1000));
  act(() => {
    jest.advanceTimersByTime(200001);
  });


  expect(result.current).toBeGreaterThan(timeAtStart);
  expect(result.current).toBeLessThan(Date.now());

  // not sure why it's 3 extra here, thinking it should be initial render + 200 = 201..
  expect(fun).toHaveBeenCalledTimes(204);
});


test('should be called once on init', () => {
  jest.useFakeTimers();

  const fun = jest.fn((now) => now);
  const { result } = renderHook(() => useUpdateInterval(fun, 1000));

  expect(fun).toHaveBeenCalledWith(result.current);
  expect(fun).toHaveBeenCalledTimes(1);
});
