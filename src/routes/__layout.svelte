<script lang="ts">
  import '../app.pcss';
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
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
      <div class="flex-grow">
        <slot />
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
