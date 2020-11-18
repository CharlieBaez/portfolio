<script>
  export let workData = {};
  const { HEADING, WORKGRID_LIST } = workData;
</script>

<style>
  .work {
    margin: 0;
  }
  .work .work-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    margin-bottom: 5rem;
  }
  @media screen and (min-width: 768px) {
    .work .work-grid {
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 8rem;
    }
  }
  .work .work-grid .work-projects {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 1;
    padding: 0.5em;
    border: 0.1rem solid whitesmoke;
    position: relative;
    height: 100%;
    background: transparent;
    transition: all 0.2s ease-in-out;
  }
  .work .work-grid .work-projects:hover,
  .work .work-grid .work-projects:focus-within {
    border: 1px solid lightgreen;
    background: lightgreen;
    color: coral;
    box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.5);
  }

  .work .work-grid .work-projects h3 {
    flex-grow: 1;
    line-height: 1.2;
    max-width: 65%;
  }
  .work .work-grid .work-projects h3 a:hover,
  .work .work-grid .work-projects h3 a:focus {
    color: coral;
    border-bottom: none;
  }
  .work .work-grid .work-projects h3 a:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .work .work-grid .work-projects p {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 5;
    width: 100%;
  }
  .work .work-grid .work-projects p:nth-child(3) {
    flex-basis: 0;
    flex-shrink: 1;
    flex-grow: 0;
    margin-bottom: 0;
  }
  .work .work-cta {
    font-size: 3rem;
    margin: 3rem 0 0;
    line-height: 4rem;
  }
  @media screen and (min-width: 768px) {
    .work .work-cta {
      font-size: 4rem;
      margin: 5rem 0 4rem;
      line-height: 5rem;
    }
  }
  .work .work-cta a {
    line-height: 1.4rem;
    font-size: 4rem;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    .work .work-cta a {
      font-size: 6rem;
    }
  }
</style>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->

<section class="work" id="work">
  <h2>work</h2>
  <div class="work-grid">
    {#each WORKGRID_LIST as work}
      <div class="work-projects">
        <h3>
          <a tabindex="0" href={work.url} target="_blank" class="link">
            {work.project}
          </a>
        </h3>
        <p>{work.description}</p>
        <p>
          <em>{work.tools}</em>
        </p>
      </div>
    {/each}
  </div>
  <div class="work-cta fade-ins">
    checkout my
    <a href="https://github.com/CharlieBaez/" target="_blank" class="link">
      GitHub
    </a>
    where I host my personal projects
  </div>
  <div class="work-cta fade-ins">
    checkout my
    <a href="https://codepen.io/RasterWolf" target="_blank" class="link">
      CodePen
    </a>
    where I sketch out ideas and prototype concepts
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
