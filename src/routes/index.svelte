<script>
  import darkMode from '$lib/darkModeStore';
</script>

<div class="flex-grow flex flex-col justify-center items-center">
  <h1 class="text-8xl text-center font-black {$darkMode ? 'dark' : 'light'}">Caleb Irwin</h1>
</div>

<style lang="postcss">
  h1 {
    color: #00000000;
    /* background: linear-gradient(to right, #18181b 0%, white 100%); */
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
    /* animation: nameDark 5s linear 2s infinite alternate; */
  }

  .dark {
    -webkit-text-stroke: 1.5px white;
    text-stroke: 1.5px white;
    animation: nameDark 10s linear 0s infinite normal;
  }
  .light {
    -webkit-text-stroke: 1.5px black;
    text-stroke: 1.5px black;
    animation: nameLight 10s linear 0s infinite normal;
  }
  @keyframes nameDark {
    0% {
      background-color: #312e81;
    }
    25% {
      background-color: #18181b;
    }
    50% {
      background-color: #312e81;
    }
    100% {
      background-color: #312e81;
    }
  }
  @keyframes nameLight {
    0% {
      background-color: #a5b4fc;
    }
    50% {
      background-color: #fafafa;
    }
    /* 50% {
      background-color: #a5b4fc;
    } */
    100% {
      background-color: #a5b4fc;
    }
  }
</style>
