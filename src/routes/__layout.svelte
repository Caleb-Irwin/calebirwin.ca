<script lang="ts">
  import '../app.pcss';
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  import darkMode from '$lib/darkModeStore';
</script>

<svelte:head>
  <title>Caleb Irwin</title>
</svelte:head>

<div class="{$darkMode ? 'dark ' : ''}h-full">
  <main>
    <Header />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </main>
</div>

<style lang="postcss">
  main {
    /* display */
    @apply flex flex-col h-full;
    /* light colour */
    @apply bg-primary-50 text-primary-900;
    /* dark colour */
    @apply dark:bg-primary-900 dark:text-primary-50;
  }
</style>
