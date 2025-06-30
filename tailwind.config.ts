import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Noto Sans Thai',
					'sans-serif'
				]
			},
			spacing: {
				'-1': '-0.25rem',
				'-2': '-0.5rem',
				'-3': '-0.75rem',
				'-4': '-1rem'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				// Design System Colors
				primary: {
					50: '#fef7ff',
					100: '#fdeeff',
					200: '#fdd4ff',
					300: '#fcb1ff',
					400: '#f983f0',
					500: '#ee4dd7',
					600: '#d932b8',
					700: '#b82192',
					800: '#981d75',
					900: '#7d1a61',
					950: '#52093c',
				},
				secondary: {
					50: '#f0fdf9',
					100: '#ccfbef',
					200: '#99f6e0',
					300: '#5de9cf',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a',
					950: '#042f2e',
				},
				accent: {
					yellow: {
						50: '#fefce8',
						100: '#fef9c3',
						200: '#fef08a',
						300: '#fde047',
						400: '#facc15',
						500: '#eab308',
						600: '#ca8a04',
						700: '#a16207',
						800: '#854d0e',
						900: '#713f12',
						950: '#422006',
					},
					blue: {
						50: '#eff6ff',
						100: '#dbeafe',
						200: '#bfdbfe',
						300: '#93c5fd',
						400: '#60a5fa',
						500: '#3b82f6',
						600: '#2563eb',
						700: '#1d4ed8',
						800: '#1e40af',
						900: '#1e3a8a',
						950: '#172554',
					}
				},
				semantic: {
					success: {
						50: '#f0fdf4',
						100: '#dcfce7',
						200: '#bbf7d0',
						300: '#86efac',
						400: '#4ade80',
						500: '#22c55e',
						600: '#16a34a',
						700: '#15803d',
						800: '#166534',
						900: '#14532d',
						950: '#052e16',
					},
					warning: {
						50: '#fffbeb',
						100: '#fef3c7',
						200: '#fde68a',
						300: '#fcd34d',
						400: '#fbbf24',
						500: '#f59e0b',
						600: '#d97706',
						700: '#b45309',
						800: '#92400e',
						900: '#78350f',
						950: '#451a03',
					},
					danger: {
						50: '#fef2f2',
						100: '#fee2e2',
						200: '#fecaca',
						300: '#fca5a5',
						400: '#f87171',
						500: '#ef4444',
						600: '#dc2626',
						700: '#b91c1c',
						800: '#991b1b',
						900: '#7f1d1d',
						950: '#450a0a',
					}
				},
				// Palette Colors from your design
				palette: {
					pink: '#E8A4C8',
					'light-blue': '#A8D8E0',
					teal: '#4A9B8E',
					yellow: '#F4E04D',
					red: '#D64545',
					blue: '#4A6FA5',
					purple: '#8E4EC6',
					dark: '#2D2D2D'
				},
				// Base colors
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 10s linear infinite',
				'fade-in': 'fade-in 0.5s ease-in-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-120%)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")]
};
export default config;
