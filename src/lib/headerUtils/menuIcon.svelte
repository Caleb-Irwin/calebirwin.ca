<script lang="ts">
  import menuOpen from '$lib/menuStore';
  export let primaryColour: string = '#000000';
</script>

{#if !$menuOpen}
  <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="16" width="40" height="2" rx="1" stroke={primaryColour} stroke-width="2" />
    <rect x="1" y="31" width="40" height="2" rx="1" stroke={primaryColour} stroke-width="2" />
    <rect x="1" y="1" width="40" height="2" rx="1" stroke={primaryColour} stroke-width="2" />
  </svg>
{:else}
  <svg width="42" height="42" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="1"
      y="32.8198"
      width="45"
      height="2"
      rx="1"
      transform="rotate(-45 1 32.8198)"
      stroke={primaryColour}
      stroke-width="2"
    />
    <rect
      x="2.41422"
      y="1"
      width="45"
      height="2"
      rx="1"
      transform="rotate(45 2.41422 1)"
      stroke={primaryColour}
      stroke-width="2"
    />
  </svg>
{/if}
