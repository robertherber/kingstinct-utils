import { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { orderBy } from 'lodash/fp';

import { useCompiledFlow } from './useCompiledFlow';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useFlowWithState = (initialData, ...maFlow) => {
  const [currentFlow, setFlow] = useState(maFlow);
  const [currentData, setData] = useState(initialData);
  const value = useCompiledFlow(currentData, ...currentFlow);

  return { setFlow, value, setData };
};

test('Should sort compiled flow', () => {
  const { result } = renderHook(
    () => useCompiledFlow([{ a: 'a' }, { a: 'b' }], orderBy('a', 'desc')),
  );

  expect(result.current).toEqual([{ a: 'b' }, { a: 'a' }]);
});


test('Should not rerender', () => {
  const orderByCompiled = jest.fn(orderBy('a', 'desc')),
        orderByUnused = jest.fn(orderBy('a', 'asc'));

  const { result } = renderHook(
    () => useFlowWithState([{ a: 'a' }, { a: 'b' }], orderByCompiled),
  );

  const initialResult = result.current.value;
  let resultAfter;

  act(() => {
    result.current.setFlow(orderByUnused);
    result.current.setFlow(orderByCompiled);
    result.current.setFlow(orderByUnused);

    resultAfter = result.current.value;
  });


  expect(result.current.value).toEqual([{ a: 'b' }, { a: 'a' }]);
  expect(initialResult === resultAfter).toBeTruthy();
});

test('Should not rerender when value is the same', () => {
  const array = [{ a: 'a' }, { a: 'b' }];
  const orderByWrapped = jest.fn(orderBy('a', 'desc'));
  const { result } = renderHook(
    () => useFlowWithState(array, orderByWrapped),
  );

  act(() => {
    result.current.setData(array);
    result.current.setData(array);
    result.current.setData(array);
  });

  expect(result.current.value).toEqual([{ a: 'b' }, { a: 'a' }]);
  expect(orderByWrapped).toHaveBeenCalledTimes(1);
});

test('Should rerender when data changes', () => {
  const orderByWrapped = jest.fn(orderBy('a', 'desc'));
  const { result } = renderHook(
    () => useFlowWithState([{ a: 'a' }, { a: 'b' }], orderByWrapped),
  );

  act(() => {
    result.current.setData([{ a: 1 }, { a: 2 }]);
  });

  expect(result.current.value).toEqual([{ a: 2 }, { a: 1 }]);
  expect(orderByWrapped).toHaveBeenCalledTimes(2);
});
