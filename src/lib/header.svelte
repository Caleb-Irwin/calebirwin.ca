<script>
  import darkMode from '$lib/darkModeStore';
  import DarkModeButtom from '$lib/headerUtils/darkModeButton.svelte';
  import Logo from '$lib/headerUtils/logo.svelte';
  import MenuLogo from '$lib/headerUtils/menuIcon.svelte';
  import menuOpen from '$lib/menuStore';

  import { page } from '$app/stores';
  import { browser } from '$app/env';
  import { onMount } from 'svelte';

  $: path = '/menu?url=' + $page.url.pathname;
  $: {
    if ($page.url.pathname === '/menu')
      path =
        $page.url.searchParams.get('url')?.length > 0 ? $page.url.searchParams.get('url') : '/';
  }
  let noScript = true;
  onMount(() => (noScript = false));
</script>

<div
  class={$menuOpen
    ? 'flex-grow flex flex-col ' + ($darkMode ? 'bg-accent-900' : 'bg-accent-300')
    : ''}
>
  <div class="flex h-16 m-4">
    <div class="h-16 w-16 grid place-items-center">
      {#if $page.url.pathname !== '/menu' && browser}
        <button
          on:click={menuOpen.toggle}
          aria-label="Menu"
          class="w-16 h-16 grid place-items-center"
        >
          <MenuLogo primaryColour={$darkMode ? '#FAFAFA' : '#18181B'} />
        </button>
      {:else}
        <a href={path} aria-label="Menu" class="w-16 h-16 grid place-items-center">
          <MenuLogo primaryColour={$darkMode ? '#FAFAFA' : '#18181B'} />
        </a>
      {/if}
    </div>
    <div class="flex-grow" />
    <a
      aria-label="Home"
      sveltekit:prefetch
      href={'/' + (noScript ? '?noScript' : '')}
      on:click={menuOpen.close}
    >
      <Logo
        primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
        secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
      />
    </a>
    <div class="flex-grow" />
    <div class="h-16 w-16 grid place-items-center">
      <DarkModeButtom
        {noScript}
        primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
        secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
      />
    </div>
  </div>

  {#if $menuOpen}
    <div class="flex-grow flex flex-row justify-center items-center">
      <div>
        <h2 class="text-6xl text-center p-1">Menu</h2>
        <div id="menu-inner" class="flex flex-col" on:click={menuOpen.close}>
          <a sveltekit:prefetch href={'/' + (noScript ? '?noScript' : '')}>Home</a>
          <a sveltekit:prefetch href={'/contact' + (noScript ? '?noScript' : '')}>Contact</a>
          <a sveltekit:prefetch href={'/about' + (noScript ? '?noScript' : '')}>About</a>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  #menu-inner > a {
    @apply text-4xl underline text-center p-0;
  }
</style>
