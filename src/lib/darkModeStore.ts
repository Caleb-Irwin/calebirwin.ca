import { writable } from 'svelte/store';
import { browser } from '$app/env';

function createMode() {
  const prefersDarkMode = browser && window?.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = (browser && JSON.parse(localStorage.getItem('darkMode'))) ?? prefersDarkMode;
  const { subscribe, set, update } = writable(stored);

  const store = (v) => {
    if (v !== prefersDarkMode) browser && localStorage.setItem('darkMode', v);
    else browser && localStorage.removeItem('darkMode');
  };
  return {
    subscribe,
    light: () => {
      set(false);
      store(false);
    },
    dark: () => {
      set(true);
      store(true);
    },
    toggle: () =>
      update((n) => {
        store(!n);
        return !n;
      }),
    reset: () =>
      set(browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  };
}

export default createMode();
