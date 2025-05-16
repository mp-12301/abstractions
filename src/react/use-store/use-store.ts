import { useSyncExternalStore } from "react";

type StoreKey = string;
type Listener = () => void;
type Store = Map<StoreKey, unknown>;

const store: Store = new Map();
const listenersByStoreKey = new Map<StoreKey, Set<Listener>>();
const hasInitialized = new Map<StoreKey, boolean>();

const createSubscribe = (key: StoreKey) =>
  function subcribe(listener: Listener) {
    const listeners = listenersByStoreKey.get(key);

    if (listeners) {
      listeners.add(listener);
    } else {
      const newListeners = new Set([listener]);

      listenersByStoreKey.set(key, newListeners);
    }

    return function unsubscribe() {
      const listeners = listenersByStoreKey.get(key);

      if (listeners) {
        listeners.delete(listener);
      }
    };
  };

const createGetSnapshot = (key: StoreKey) =>
  function getSnapshot() {
    return store.get(key);
  };

function dispatchChange(key: StoreKey) {
  const listeners = listenersByStoreKey.get(key);

  if (listeners) {
    for (const listener of listeners) {
      listener();
    }
  }
}

export default function useStore<T>(
  key: StoreKey,
  defaultValue: T,
): [T, (value: T) => void] {
  const storeValue = useSyncExternalStore(
    createSubscribe(key),
    createGetSnapshot(key),
  ) as T;

  function setter(newValue: T) {
    store.set(key, newValue);
    hasInitialized.set(key, true);

    dispatchChange(key);
  }

  const value = hasInitialized.get(key) ? storeValue : defaultValue;

  return [value, setter];
}
