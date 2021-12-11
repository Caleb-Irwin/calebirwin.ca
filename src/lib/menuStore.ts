import { writable } from 'svelte/store';

function createMode() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    open: () => {
      set(true);
    },
    close: () => {
      set(false);
    },
    toggle: () => update((n) => !n)
  };
}

export default createMode();
