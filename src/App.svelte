<script>
  import Navbar from "./Components/Navbar/Navbar.svelte";
  import Banner from "./Components/Banner/Banner.svelte";
  import About from "./Components/About/About.svelte";
  import WorkGrid from "./Components/WorkGrid/WorkGrid.svelte";
  import Contact from "./Components/Contact/Contact.svelte";
  import Footer from "./Components/Footer/Footer.svelte";
  import DATA from "./Data/data";
</script>

<div id="stars" />
<div id="stars2" />
<div id="stars3" />

<header class="container">
  <Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
  <Banner bannerData={DATA.BANNER_DATA} } />
</header>
<main class="container">
  <About aboutData={DATA.ABOUT_DATA} />
  <WorkGrid workData={DATA.WORKGRID_DATA} />
  <Contact />
</main>
<footer>
  <Footer />
</footer>
