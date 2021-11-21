<script>
  import darkMode from '$lib/darkModeStore';
  import Buttom from '$lib/headerUtils/darkModeButton.svelte';
  import Logo from '$lib/headerUtils/logo.svelte';
  import Burger from '$lib/headerUtils/burgerIcon.svelte';
  import menuOpen from '$lib/menuStore';
</script>

<div class={$menuOpen ? 'h-screen ' + ($darkMode ? 'bg-accent-900' : 'bg-accent-300') : ''}>
  <div class="flex h-16 m-4">
    <button
      on:click={menuOpen.toggle}
      aria-label="Menu"
      class="w-16 h-16 flex flex-row justify-center items-center"
    >
      <Burger primaryColour={$darkMode ? '#FAFAFA' : '#18181B'} />
    </button>
    <div class="flex-grow" />
    <a aria-label="Home" href="/">
      <Logo
        primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
        secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
      />
    </a>
    <div class="flex-grow" />
    <div class="h-16">
      <Buttom
        aria-label="Dark Mode Toggle"
        primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
        secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
      />
    </div>
  </div>

  {#if $menuOpen}
    <div>Menu</div>
  {/if}
</div>
