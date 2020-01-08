import { renderHook, act } from '@testing-library/react-hooks';

import useToggleState from './useToggleState';

test('should start with true', () => {
  const { result } = renderHook(() => useToggleState(true));

  expect(result.current[0]).toBe(true);
});


test('should with false', () => {
  const { result } = renderHook(() => useToggleState(false));

  expect(result.current[0]).toBe(false);
});


test('should toggle from false to true', () => {
  const { result } = renderHook(() => useToggleState(false));

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe(true);
});
