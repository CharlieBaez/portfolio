const NAVBAR_DATA = [
	{ id: 1, url: '#about', title: 'about', tabIndex: 1 },
	{ id: 2, url: '#work', title: 'work', tabIndex: 2 },
	{ id: 3, url: '#contact', title: 'contact', tabIndex: 3 },
];
const BANNER_DATA = {
	HEADING: 'Charlie Baez Does Web Stuff',
	DECRIPTION: '...hace bien',
};

const ABOUT_DATA = {
	HEADING: 'hola',
	IMAGE_URL: '/images/selfie_gray_glasses.png',
	DESCRIPTION:
		'I am a developer with a focus in UI, Motion Design, UX and Accessibility. I utilize a variety of tools including Javascript, modern js frameworks (Svelte, React, and Gatsby), GraphQL, a11y Web Standards and more to build engaging, immersive, and accessible user experiences. I love learning and exploring this ever evolving digital landscape.',
	QUOTE: '"Somewhere, something incredible is waiting to be known."',
	BYLINE: 'Carl Sagan',
};
const WORKGRID_DATA = {
	HEADING: 'work',
	WORKGRID_LIST: [
		{
			url: 'https://wwex.com/',
			project: 'World Wide Express',
			description:
				'website resdesign and development. Because of budget and time constraints, we concentrated on theming and flexibility of limited components',
			tools: 'SASS | jQuery | Green Sock | Bootstrap | Nunjucks',
		},
		{
			url: 'https://expensivo.netlify.app/',
			project: '¡Expensivo!',
			description:
				'Budget Calculator App. This was a personal Project to learn SvelteJs',
			tools: 'Svelte | Rollup | CSS Custom Properties | Netlify',
		},
		{
			url: 'https://edc-static.netlify.app',
			project: 'Entrust Data Card',
			description:
				'website resdesign and development. The link leads to a static style guide not the production sight. This was used for dev and design to interogate the components in realtime.',
			tools: 'SASS | jQuery | Custom SVG Library | Bootstrap | Nunjucks',
		},
		{
			url: 'https://www.milwaukeetool.com/Innovations/m12',
			project: 'Milwaukee Tool',
			description:
				'website and app development for Milwaukee Tool brand update; heavy work on animations and interactivity',
			tools: 'SASS | jQuery | Green Sock | Bootstrap',
		},
		{
			url: 'https://www.bremer.com',
			project: 'Bremer \n Bank',
			description:
				'website and app development for Bremer Bank re-branding. A major part of the project was an accessibility audit and compliance development',
			tools: 'SASS | jQuery | React | Bootstrap | Nunjucks',
		},
		{
			url: 'https://estimate-calculator-fed.baezcharliew.now.sh/',
			project: 'Task Based Estimator',
			description:
				'A prototype for a task based estimator for Project Managers',
			tools: 'SASS | React | Reactstrap | NextJs',
		},
	],
};

const FOOTER_DATA = {
	DESCRIPTION:
		'We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.',
	CONTACT_DETAILS: {
		HEADING: 'Contact us',
		ADDRESS: 'La trobe street docklands, Melbourne',
		MOBILE: '+1 61234567890',
		EMAIL: 'nixalar@gmail.com',
	},
	SUBSCRIBE_NEWSLETTER: 'Subscribe newsletter',
	SUBSCRIBE: 'Subscribe',
};

const SITE_DATA = {
	NAVBAR_DATA,
	BANNER_DATA,
	ABOUT_DATA,
	WORKGRID_DATA,
	FOOTER_DATA,
};
export default SITE_DATA;
