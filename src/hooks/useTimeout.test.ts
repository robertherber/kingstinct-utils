import { renderHook } from '@testing-library/react-hooks';

import useTimeout from './useTimeout';

test('should call function', () => {
  jest.useFakeTimers();

  const fun = jest.fn();

  renderHook(() => useTimeout(fun, 10));

  jest.runTimersToTime(50);

  expect(fun).toHaveBeenCalled();
});
