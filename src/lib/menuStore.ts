import { writable } from 'svelte/store';

function createMode() {
  const { subscribe, set, update } = writable<boolean>(null);

  return {
    subscribe,
    open: () => {
      set(true);
    },
    close: () => {
      set(false);
    },
    toggle: () => update((n) => !n),
    state: () => {
      let out: boolean;
      update((x) => {
        out = x;
        return x;
      });
      return out;
    }
  };
}

export default createMode();
