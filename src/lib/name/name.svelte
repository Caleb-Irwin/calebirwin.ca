<script lang="ts">
  import darkMode from '$lib/darkModeStore';
  import Caleb from './caleb.svelte';
  import Irwin from './irwin.svelte';
</script>

<div class="flex flex-wrap justify-center">
  <div class="p-3">
    <Caleb
      primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
      secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
    />
  </div>
  <div class="p-3">
    <Irwin
      primaryColour={$darkMode ? '#FAFAFA' : '#18181B'}
      secondaryColour={$darkMode ? '#312E81' : '#A5B4FC'}
    />
  </div>
</div>
