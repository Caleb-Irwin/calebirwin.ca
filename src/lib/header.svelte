<script>
  import darkMode from '$lib/darkModeStore';
</script>

<div class="flex w-full">
  <h1>Header</h1>
  <div class="flex-grow" />
  <button on:click={darkMode.toggle}>Toggle Dark Mode</button>
</div>
