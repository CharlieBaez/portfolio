<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    height: 80%;
  }

  .hero-headline {
    /* font-family: "Monoton", cursive;
    font-size: 5rem; */
    margin: 0;
    /* font-weight: normal; */
    text-align: center;
  }

  .hero-copy {
    font-size: 2em;
    margin-bottom: 0;
    padding: 1rem;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    .hero {
      padding: 4rem 0;
      height: 80%;
    }
    .hero-headline {
      font-size: 11rem;
    }
    .hero-copy {
      font-size: 2.4rem;
      padding: 2rem;
    }
  }
  @media screen and (min-width: 400px) {
    .hero-headline {
      font-size: 7rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .hero-headline {
      font-size: 15rem;
    }
  }
</style>

<section class="hero">
  <h1 class="hero-headline">{HEADING}</h1>
  <div class="hero-copy">
    <p>{DECRIPTION}</p>
  </div>
</section>
