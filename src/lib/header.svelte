<script>
  import darkMode from '$lib/darkModeStore';
  import Buttom from '$lib/headerUtils/darkModeButton.svelte';
  import Logo from '$lib/headerUtils/logo.svelte';
  import Burger from '$lib/headerUtils/burgerIcon.svelte';
</script>

<div class="flex h-16 m-4">
  <div class="w-16 h-16 flex flex-row justify-center items-center">
    <Burger primaryColour={$darkMode ? '#FAFAFA' : '#18181B'} />
  </div>
  <div class="flex-grow" />
  <Logo
    primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
    secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
  />
  <div class="flex-grow" />
  <div class="h-16">
    <Buttom
      primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
      secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
    />
  </div>
</div>
