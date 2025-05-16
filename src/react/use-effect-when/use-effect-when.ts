import { useEffect, useRef } from "react";

type UseEffectCallback = () => void | (() => void);

type UseEffectDeps = Array<unknown>;

function useEffectOnChange(cb: UseEffectCallback, onChange: UseEffectDeps) {
  const useEffectCallbackRef = useRef<UseEffectCallback>(null);
  useEffectCallbackRef.current = cb;

  useEffect(useEffectCallbackRef.current, onChange);
}

export default useEffectOnChange;
