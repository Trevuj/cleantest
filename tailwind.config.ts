const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
			scroll:
			"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		},
		keyframes: {
			scroll: {
			to: {
				transform: "translate(calc(-50% - 0.5rem))",
			},
			},
		},
  	},
	
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors,
	function ({ matchUtilities, theme }: any) {
		matchUtilities(
		  {
			"bg-dot-thick": (value: any) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
			  )}")`,
			}),
		  },
		  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
		);
	  },
  ],
};
export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}