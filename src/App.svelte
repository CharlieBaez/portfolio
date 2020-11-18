<script>
  import Navbar from "./Components/Navbar/Navbar.svelte";
  import Banner from "./Components/Banner/Banner.svelte";
  import About from "./Components/About/About.svelte";
  import WorkGrid from "./Components/WorkGrid/WorkGrid.svelte";
  import Contact from "./Components/Contact/Contact.svelte";
  import Footer from "./Components/Footer/Footer.svelte";
  import DATA from "./Data/data";
</script>

<header class="container">
  <!-- Navbar -->
  <Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
  <!-- Banner -->
  <Banner bannerData={DATA.BANNER_DATA} } />
</header>
<main class="container">
  <!-- About -->
  <About aboutData={DATA.ABOUT_DATA} />
  <!-- Testimonials -->
  <WorkGrid workData={DATA.WORKGRID_DATA} />
  <!-- Social Media -->
  <Contact />
</main>
<footer class="container">
  <!-- Footer -->
  <Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />
</footer>
