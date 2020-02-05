import {
  useEffect, useMemo, useRef,
} from 'react';
import { flow } from 'lodash/fp';

type FlowFunction = <C, D>(data: C) => D;

export const useCompiledFlow = <T, B>(data: B, ...flowArgs: Array<FlowFunction>): T => {
  const flowRef = useRef(flow(...flowArgs));

  useEffect(() => {
    flowRef.current = flow(...flowArgs);
  }, [flowArgs]);

  return useMemo(() => flowRef.current(data), [data]);
};

export default useCompiledFlow;
