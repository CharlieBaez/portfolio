<script>
  export let navlists = [];

  /* Scroll Linnking */
  const navLinks = document.querySelectorAll(".navbar-item");

  const linkScroll = e => {
    const scrollTrigger = e.target.getAttribute("name");
    const scrollTarget = document.getElementById(scrollTrigger);
    scrollTarget.scrollIntoView({ behavior: "smooth" });
  };

  const linkScrollFocus = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.click();
      setTimeout(function() {
        const scrollTrigger = e.target.getAttribute("name");
        const scrollTarget = document.getElementById(scrollTrigger);
        scrollTarget.querySelector("[tabindex], a, input, textarea").focus();
      }, 700);
    }
  };
</script>

<style>
  .navbar {
    display: flex;
    width: 90%;
    padding: 2rem 0 1.75rem 0;
    margin: 0 auto;
  }

  .navbar-list {
    list-style: none;
    display: flex;
    margin-bottom: 0;
    width: 100%;
    align-content: center;
    flex-flow: row;
    flex-grow: 1;
    justify-content: space-between;
  }
  .navbar-item {
    margin-bottom: 0;
    list-style: none;
    text-align: center;
    font-size: 2.4rem;
    padding: 1rem;
    line-height: 4rem;
    cursor: pointer;
  }
  .navbar-item:hover,
  .navbar-item:focus {
    color: lightgreen;
  }
  @media screen and (min-width: 769px) {
    .navbar {
      margin: 0 auto 6rem auto;
    }
    .navbar-item {
      font-size: 3.6rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .navbar-item {
      font-size: 6rem;
    }
  }
</style>

<section id="nav-bar">
  <nav class="navbar">
    <ul class="navbar-list">
      {#each navlists as list}
        <li
          class="navbar-item link"
          name={list.title}
          tabindex="0"
          role="link"
          aria-label="Link to {list.title} section"
          on:click={linkScroll}
          on:keyup={linkScrollFocus}>
          {list.title}
        </li>
      {/each}
    </ul>
  </nav>
</section>
