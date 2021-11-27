<div class="flex-grow flex flex-row justify-center items-center">
  <form class="max-w-screen-sm w-3/4">
    <h1 class="text-5xl">Contact</h1>
    <p>
      <label for="name">Name</label><br />
      <input
        class="bg-primary-200 dark:bg-primary-800"
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
        class="bg-primary-200 dark:bg-primary-800"
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
        class="bg-primary-200 dark:bg-primary-800"
        id="message"
        name="message"
        cols="30"
        required
      />
    </p>
    <p>
      <button class="bg-accent-200 dark:bg-accent-900">Send</button>
    </p>
  </form>
</div>

<style lang="postcss">
  p,
  h1 {
    @apply m-2;
  }
  input,
  textarea,
  button {
    @apply p-2 w-full;
  }
</style>
