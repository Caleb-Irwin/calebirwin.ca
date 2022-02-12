<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import menuStore from '$lib/menuStore';

  export const load: Load = async ({ url }) => {
    if (url.pathname === '/menu') {
      menuStore.open();
    } else if (url.searchParams.has('noScript')) {
      menuStore.close();
    }
    return {};
  };
</script>

<script lang="ts">
  import { navigating } from '$app/stores';
  import '../app.pcss';
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  import Spinner from '$lib/spinner.svelte';
  import darkMode from '$lib/darkModeStore';
  import menuOpen from '$lib/menuStore';
</script>

<svelte:head>
  <title>Caleb Irwin</title>
</svelte:head>

<div class="{$darkMode ? 'dark ' : ''}h-full font-display">
  <main>
    <Header />
    {#if !$menuOpen}
      <div class="flex-grow flex">
        {#if $navigating === null}
          <slot />
        {:else}
          <Spinner />
        {/if}
      </div>
    {/if}
    <Footer />
  </main>
</div>

<style lang="postcss">
  /* Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');

  main {
    /* display */
    @apply flex flex-col h-full;
    /* light colour */
    @apply bg-primary-50 text-primary-900;
    /* dark colour */
    @apply dark:bg-primary-900 dark:text-primary-50;
  }
</style>
