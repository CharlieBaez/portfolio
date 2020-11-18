<script>
  const sendEmail = e => {
    window.open("mailto:charliewbaez@gmail.com?subject=Oh Hey!");
  };
</script>

<style>
  .contact {
    margin: 6rem auto;
  }
  .contact h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact h2 a.link {
    background: transparent;
    border: solid 0.1rem whitesmoke;
    border-radius: 0;
    color: whitesmoke;
    cursor: pointer;
    padding: 2rem;
    text-align: center;
    width: auto;
    margin: 2rem auto;
    line-height: 3rem;
    text-transform: none;
    transition: all 0.2s ease-in-out;
  }
  .contact h2 a.link:hover,
  .contact h2 a.link:active,
  .contact h2 a.link:focus {
    background: lightgreen;
    color: coral;
    border: solid 0.1rem lightgreen;
    box-shadow: 0.1rem 0.3rem 0.7rem 0.1rem rgba(30, 30, 30, 0.1);
  }
</style>

<section class="contact" id="contact">
  <h2 class="fade-ins">
    <a class="link" href="#contact" on:click={sendEmail}>shoot me a message!</a>
  </h2>
</section>
