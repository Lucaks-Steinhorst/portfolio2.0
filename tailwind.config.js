/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Roboto',
				poppins: 'Poppins',
				epilogue: 'Epilogue',
				urbanist: 'Urbanist',
				nabla: 'Kelly Slab',
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				heading: 'var(--color-heading)',
				text: 'var(--color-text)',
				background: 'var(--color-background)',
			},
		},
	},
	plugins: [],
};
