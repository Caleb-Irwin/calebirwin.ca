<script>
  import darkMode from '$lib/darkModeStore';
</script>

<div class="flex-grow flex flex-col justify-center items-center">
  <svg
    class="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" stroke={$darkMode ? '#18181B' : '#FAFAFA'} stroke-width="4" />
    <path
      fill={$darkMode ? '#FAFAFA' : '#18181B'}
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
</div>

<style lang="postcss">
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin {
    animation: spin 0.5s linear infinite;
  }
</style>
