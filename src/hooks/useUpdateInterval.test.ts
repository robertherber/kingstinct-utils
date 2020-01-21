import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from 'react';

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
  expect(result.current).toBeLessThanOrEqual(Date.now());
});

test('should have been called 201 times', () => {
  jest.useFakeTimers();

  const fun = jest.fn((now) => now);

  const { result } = renderHook(() => useUpdateInterval(fun, 1000));

  act(() => {
    jest.runTimersToTime(result.current + 200000 - Date.now());
    jest.clearAllTimers();
  });

  expect(fun.mock.calls.length).toBeGreaterThanOrEqual(200);
  expect(fun.mock.calls.length).toBeLessThanOrEqual(202);
});

test('should not trigger rerenders outside itself', () => {
  jest.useFakeTimers();

  const cbFun = jest.fn(() => 5);
  const otherFunction = jest.fn();

  const useHookWithSpy = (cb, ms) => {
    const val = useUpdateInterval(cb, ms);
    return otherFunction(val);
  };

  renderHook(() => useHookWithSpy(cbFun, 1000));

  act(() => {
    jest.advanceTimersByTime(50000);
    jest.clearAllTimers();
  });

  expect(cbFun.mock.calls.length).toBeGreaterThanOrEqual(5);
  expect(otherFunction).toHaveBeenCalledTimes(1);
});

test('should be called once on init', () => {
  const fun = jest.fn((now) => now);
  const { result } = renderHook(() => useUpdateInterval(fun, 1000));

  expect(fun).toHaveBeenCalledWith(result.current);
  expect(fun).toHaveBeenCalledTimes(1);
});

type Updater = (now: number) => number;
type FnReturningUpdater = () => Updater;
type CBT = (updater: FnReturningUpdater) => void;

test('should be called when updating function', () => {
  jest.useFakeTimers();
  const useHookWithSpy = (initialFn: Updater): [CBT, number] => {
    const [fun, setFun] = useState(() => initialFn);
    const val = useUpdateInterval(fun, 100000);
    return [setFun, val];
  };

  const newFn = jest.fn(() => 5);
  const firstFun = jest.fn(() => 15);


  const { result } = renderHook(() => useHookWithSpy(firstFun));

  act(() => {
    const hey = result.current[0];
    hey(() => newFn);
  });

  expect(result.current[1]).toEqual(5);
  expect(newFn).toHaveBeenCalledTimes(1);
});
