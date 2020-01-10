import { renderHook, act } from '@testing-library/react-hooks';

import useUpdateInterval from './useUpdateInterval';

test('callback should have been called with current time', () => {
  jest.useFakeTimers();

  const timeAtStart = Date.now();
  const fun = jest.fn((now) => now);
  const { result } = renderHook(() => useUpdateInterval(fun, 1000));

  act(() => {
    jest.advanceTimersByTime(2000);
  });

  expect(result.current).toBeGreaterThan(timeAtStart);
  expect(result.current).toBeLessThan(Date.now());
});

test('should have been called 201 times', () => {
  jest.useFakeTimers();

  const fun = jest.fn((now) => now);

  const { result } = renderHook(() => useUpdateInterval(fun, 1000));

  act(() => {
    jest.runTimersToTime(result.current + 200000 - Date.now());
    jest.clearAllTimers();
  });

  expect(fun.mock.calls.length).toBeGreaterThanOrEqual(201);
  expect(fun.mock.calls.length).toBeLessThanOrEqual(210);
});


test('should be called once on init', () => {
  jest.useFakeTimers();

  const fun = jest.fn((now) => now);
  const { result } = renderHook(() => useUpdateInterval(fun, 1000));

  expect(fun).toHaveBeenCalledWith(result.current);
  expect(fun).toHaveBeenCalledTimes(1);
});
