<script>
  let today = new Date(),
    age = today.getFullYear() - 2006 - 1,
    month = today.getMonth(),
    day = today.getDate();

  if (month > 3) {
    age++;
  } else if (month === 3 && day >= 15) {
    age++;
  }
</script>

<div class="flex-grow flex flex-col justify-center items-center">
  <h1 class="text-5xl">About</h1>
  <p class="p-4 text-center">
    Caleb Irwin is a {age} year old developer who has been writing code since he was 10. <br/> [extended bio
    coming soon]
  </p>
</div>
