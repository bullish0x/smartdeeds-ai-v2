import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellowish': '#EEFE93',
        'black': '#000000',
        'white': '#FFFFFF',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        caustics1: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        caustics2: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, 40px) scale(0.8)' },
          '66%': { transform: 'translate(40px, -40px) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        caustics3: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, 30px) scale(1.15)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        shimmer: 'shimmer 15s linear infinite',
        caustics1: 'caustics1 8s ease-in-out infinite',
        caustics2: 'caustics2 12s ease-in-out infinite',
        caustics3: 'caustics3 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config

