<script>
  export let aboutData = {};
  const { HEADING, TITLE, IMAGE_URL, DESCRIPTION, QUOTE, BYLINE } = aboutData;
</script>

<style>
  .about .headshot {
    display: flex;
    align-self: center;
    width: 70%;
    height: auto;
    margin: 2rem auto;
    clip-path: polygon(100% 0, 0 0, 50% 100%);
  }

  .about p {
    font-size: 2.4rem;
    line-height: 3rem;
  }
  .about blockquote {
    font-size: 2.8rem;
    line-height: 3.2rem;
    text-align: center;
  }
  @media screen and (min-width: 769px) {
    .about p {
      font-size: 3.6rem;
      line-height: 4rem;
    }
  }
</style>

<section class="about" id="about">
  <img src={IMAGE_URL} class="headshot scalers" alt="charlie_baez" />
  <h2 class="fade-ins">{HEADING}</h2>
  <p class="fade-ins">{DESCRIPTION}</p>
  <blockquote class="fade-ins">
    <em>{QUOTE} &mdash; {BYLINE}</em>
  </blockquote>
</section>
