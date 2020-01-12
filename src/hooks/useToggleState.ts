import { useState, useCallback } from 'react';

/**
 *
 * @param initialState Initial state of the hook
 * @returns state of the toggle, as well as a function to do the actual toggle
 */
const useToggleState = (initialState: boolean): [boolean, (() => void)] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((curState) => !curState), []);

  return [state, toggle];
};

export default useToggleState;
