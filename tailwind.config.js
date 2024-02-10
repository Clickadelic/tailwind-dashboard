/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		listStyleType: {
			none: "none",
			disc: "disc",
			decimal: "decimal",
			square: "square",
			roman: "upper-roman"
		},
		extend: {
			backgroundImage: {
				"bg-waves": "url('/public/Wave-bg.svg')"
			}
		}
	},
	plugins: [require("tw-elements/dist/plugin.cjs")],
	darkMode: "class"
};
