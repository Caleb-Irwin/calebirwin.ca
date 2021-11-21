import { writable } from 'svelte/store';

function createMode() {
  const { subscribe, set, update } = writable(false);
  return {
    subscribe,
    open: () => {
      set(false);
    },
    close: () => {
      set(true);
    },
    toggle: () => update((n) => !n)
  };
}

export default createMode();
