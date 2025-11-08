import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', 'class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			yellowish: '#EEFE93',
  			black: '#09090b',
  			white: '#FFFFFF',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			xl: '1.5rem',
  			'2xl': '2rem'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'96': '24rem',
  			'100': '25rem',
  			'104': '26rem',
  			'112': '28rem'
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1rem',
  					letterSpacing: '0.02em'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem',
  					letterSpacing: '0.01em'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '2rem'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '2.5rem',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '3.5rem',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '4rem',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'7xl': [
  				'4.5rem',
  				{
  					lineHeight: '4.75rem',
  					letterSpacing: '-0.02em'
  				}
  			]
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  			DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  			md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  			xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  			'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  			glow: '0 0 20px rgba(238, 254, 147, 0.3)',
  			'glow-lg': '0 0 40px rgba(238, 254, 147, 0.4)',
  			inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
  		},
  		zIndex: {
  			'60': '60',
  			'70': '70',
  			'80': '80',
  			'90': '90',
  			'100': '100'
  		},
  		transitionDuration: {
  			'400': '400ms'
  		},
  		transitionTimingFunction: {
  			smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  			bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  		},
  		keyframes: {
  			shimmer: {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'100%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			caustics1: {
  				'0%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(30px, -30px) scale(1.1)'
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.9)'
  				},
  				'100%': {
  					transform: 'translate(0, 0) scale(1)'
  				}
  			},
  			caustics2: {
  				'0%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(-40px, 40px) scale(0.8)'
  				},
  				'66%': {
  					transform: 'translate(40px, -40px) scale(1.2)'
  				},
  				'100%': {
  					transform: 'translate(0, 0) scale(1)'
  				}
  			},
  			caustics3: {
  				'0%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(20px, 30px) scale(1.15)'
  				},
  				'100%': {
  					transform: 'translate(0, 0) scale(1)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-in-right': {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'slide-in-left': {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'glow-pulse': {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(238, 254, 147, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px rgba(238, 254, 147, 0.6)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			shimmer: 'shimmer 15s linear infinite',
  			caustics1: 'caustics1 8s ease-in-out infinite',
  			caustics2: 'caustics2 12s ease-in-out infinite',
  			caustics3: 'caustics3 10s ease-in-out infinite',
  			'fade-in': 'fade-in 0.6s ease-out',
  			'fade-in-up': 'fade-in-up 0.6s ease-out',
  			'slide-in-right': 'slide-in-right 0.3s ease-out',
  			'slide-in-left': 'slide-in-left 0.3s ease-out',
  			'scale-in': 'scale-in 0.2s ease-out',
  			'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		backdropBlur: {
  			xs: '2px'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
}
export default config

