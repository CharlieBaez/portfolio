const NAVBAR_DATA = [
  { id: 1, url: "#about", title: "about", tabIndex: 1 },
  { id: 2, url: "#work", title: "work", tabIndex: 2 },
  { id: 3, url: "#contact", title: "contact", tabIndex: 3 },
];
const BANNER_DATA = {
  HEADING: "Charlie Baez Does Web Stuff",
  DECRIPTION: "...hace bien",
};

const ABOUT_DATA = {
  HEADING: "hola",
  IMAGE_URL: "/build/images/selfie_gray_glasses.png",
  IMAGE_WIDTH: "400",
  IMAGE_HEIGHT: "343",
  DESCRIPTION:
    "I am a developer with a focus in UI, UX and Accessibility. I utilize a variety of tools including Javascript, NextJs, TailWindCSS, GraphQL, a11y Web Standards and more to build engaging, immersive, and accessible user experiences. I love learning and exploring this ever evolving digital landscape.",
  QUOTE: '"Somewhere, something incredible is waiting to be known."',
  BYLINE: "Carl Sagan",
};
const WORKGRID_DATA = {
  HEADING: "work",
  WORKGRID_LIST: [
    {
      url: "https://www.gci.com/",
      project: "Alaska's larget communication provider",
      description:
        "application and website development and replatform of existing site to XMCloud. Colaborative dev with internal team",
      tools: "NextJs | TailwindCSS | Figma Design Tokens | JSS",
    },
    {
      url: "https://bell.bank",
      project: "Bell Bank Replatform",
      description:
        "application and website development and replatform of existing site to XMCloud. Lead Front End Tech",
      tools: "NextJs | TailwindCSS | SitecoreSearch | JSS",
    },
    {
      url: "https://www.AZBlue.com/",
      project: "Blue Cross Blue Shield Arizona",
      description:
        "application development for website and policy selection flow. Colaborative dev with internal team",
      tools: "NextJs | TailwindCSS | SXA | JSS",
    },
    {
      url: "https://www.bethematch.org/",
      project: "Be The Match",
      description:
        "website resdesign and development for B2B. Colaborative dev with internal team",
      tools: "NextJs | TailwindCSS | Sitecore | JSS",
    },
    {
      url: "https://www.unitybyhardrock.com/",
      project: "Unity by Hard Rock",
      description:
        "website and loyalty platform development. Colaborative dev with internal team",
      tools: "Vanilla Javascript | React | Webpack | Handlebars | SASS",
    },
    {
      url: "https://www.seminolewildcard.com/",
      project: "Seminole Wild Card",
      description:
        "website resdesign and development, mobile app development. Colaborative dev with internal team",
      tools:
        "Vanilla Javascript | React | React Native | WKWebview | WSO2 | JSP",
    },
    {
      url: "https://weathered-or-not.netlify.app",
      project: "Weathered",
      description:
        "Weather App I built just because it was rainy outside and I was bored",
      tools: "Vanilla Javascript | Accuweather API",
    },
    {
      url: "https://wwex.com/",
      project: "World Wide Express",
      description:
        "website resdesign and development. Because of budget and time constraints, we concentrated on theming and flexibility of limited components",
      tools: "SASS | jQuery | Green Sock | Bootstrap | Nunjucks",
    },
    {
      url: "https://animales.netlify.app/",
      project: "Animales App",
      description: "App designed by my son and built by me with the SUN stack",
      tools: "Svelte | Userbase SDK | Netlify",
    },
    {
      url: "https://expensivo.netlify.app/",
      project: "¡Expensivo!",
      description:
        "Budget Calculator App. This was a personal Project to learn SvelteJs",
      tools: "Svelte | Rollup | CSS Custom Properties | Netlify",
    },
    {
      url: "https://edc-static.netlify.app",
      project: "Entrust Data Card",
      description:
        "website resdesign and development. The link leads to a static style guide not the production sight. This was used for dev and design to interogate the components in realtime.",
      tools: "SASS | jQuery | Custom SVG Library | Bootstrap | Nunjucks",
    },
    {
      url: "https://www.milwaukeetool.com/Innovations/m12",
      project: "Milwaukee Tool",
      description:
        "website and app development for Milwaukee Tool brand update; heavy work on animations and interactivity",
      tools: "SASS | jQuery | Green Sock | Bootstrap",
    },
    {
      url: "https://www.bremer.com",
      project: "Bremer \n Bank",
      description:
        "website and app development for Bremer Bank re-branding. A major part of the project was an accessibility audit and compliance development",
      tools: "SASS | jQuery | React | Bootstrap | Nunjucks",
    },
    {
      url: "https://estimate-calculator-fed.baezcharliew.now.sh/",
      project: "Task Based Estimator",
      description:
        "A prototype for a task based estimator for Project Managers",
      tools: "SASS | React | Reactstrap | NextJs",
    },
  ],
};

const SITE_DATA = {
  NAVBAR_DATA,
  BANNER_DATA,
  ABOUT_DATA,
  WORKGRID_DATA,
};
export default SITE_DATA;
