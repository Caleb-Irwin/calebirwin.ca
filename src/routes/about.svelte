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
  <p class="p-4 text-center max-w-xl">
    Caleb Irwin is a {age} year old developer who has been writing code since he was 10. He is currently
    attending the University of Toronto to study computer science on Canada's largest undergraduate scholarship,
    the
    <a
      href="https://defygravitycampaign.utoronto.ca/news-and-stories/2024-schulich-leaders/"
      target="_blank"
      rel="noopener noreferrer"
      class="underline">Schulich Leaders Scholarship</a
    >.
  </p>
  <!-- <a class="underline text-center text-lg" href="/static/Caleb Irwin Resume.pdf">Resume</a> -->
</div>
