<script>
  import Name from '$lib/name/name.svelte';
</script>

<div class="flex-grow flex flex-col justify-center items-center">
  <Name />
  <p class="text-center text-4xl">Developer</p>
  <ul class="p-4 flex flex-row">
    <li class="">
      <a
        href="http://github.com/Caleb-Irwin"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xl px-0.5 border-b-4 border-[#A5B4FC] dark:border-[#312E81]">GitHub</a
      >
    </li>
    <li class="w-4" />
    <li class="">
      <a
        href="https://www.linkedin.com/in/caleb-irwin-b35b76322/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xl px-0.5 border-b-4 border-[#A5B4FC] dark:border-[#312E81]"
      >
        LinkedIn
      </a>
    </li>
  </ul>
</div>
