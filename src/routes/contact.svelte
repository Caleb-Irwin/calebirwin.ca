<script>
  import { page } from '$app/stores';
  let name = '',
    email = '',
    message = '';
  if ($page.url.searchParams.has('failed')) {
    name = $page.url.searchParams.get('name');
    email = $page.url.searchParams.get('email');
    message = $page.url.searchParams.get('message');
  }
</script>

<div class="flex-grow flex flex-col justify-center items-center">
  <div class="flex-grow flex">
    {#if $page.url.searchParams.has('failed') || $page.url.searchParams.has('submitted')}
      <div class="flex flex-col justify-center items-center">
        {#if $page.url.searchParams.has('failed')}
          <h1 class="text-4xl lg:text-5xl">&#10006; Failed</h1>
          <p class="text-2xl ">Maybe try again?</p>
        {:else}
          <h1 class="text-4xl lg:text-5xl">&#10004; Submitted</h1>
          <a href="/" class=" text-2xl underline">Home</a>
        {/if}
      </div>
    {/if}
  </div>
  <form class="max-w-screen-sm w-3/4" action="/api/contact" method="POST">
    <h1 class="text-5xl text-center lg:text-left">Contact</h1>
    <p>
      <label for="name">Name</label><br />
      <input
        bind:value={name}
        class="bg-primary-300 dark:bg-primary-800"
        id="name"
        name="name"
        type="text"
        size="30"
        required
      />
    </p>
    <p>
      <label for="email">Email</label><br />
      <input
        bind:value={email}
        class="bg-primary-300 dark:bg-primary-800"
        id="email"
        name="email"
        type="email"
        size="30"
        required
      />
    </p>
    <p>
      <label for="message">Message</label><br />
      <textarea
        bind:value={message}
        class="bg-primary-300 dark:bg-primary-800"
        id="message"
        name="message"
        rows="10"
        required
      />
    </p>
    <p>
      <button class="bg-accent-200 dark:bg-accent-900 hover:bg-accent-400 dark:hover:bg-accent-700"
        >Send</button
      >
    </p>
  </form>
  <div class="flex-grow" />
</div>

<style lang="postcss">
  p,
  h1 {
    @apply m-2;
  }
  input,
  textarea,
  button {
    @apply p-2 w-full rounded;
  }
</style>
