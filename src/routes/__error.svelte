<script lang="ts" context="module">
  import type { ErrorLoad } from '@sveltejs/kit';
  export const load: ErrorLoad = ({ error, status }) => {
    console.error(error);
    return {
      props: {
        title: `${status}`,
        message: `${error.message}`
      }
    };
  };
</script>

<script lang="ts">
  export let title: string;
  export let message: string;
</script>

<div class="flex-grow">
  <h1 class="text-6xl text-center">{title}</h1>
  <p class="text-2xl text-center">{message}</p>
  <p class="text-2xl text-center underline">
    <a href="/">Home</a>
  </p>
</div>
