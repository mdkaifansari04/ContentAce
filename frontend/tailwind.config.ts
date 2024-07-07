import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import tailwindAnimatePlugin from 'tailwindcss-animate';
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: '#2D3339',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#1E2328', //sidebar color
        foreground: '#3B4148',
        primary: {
          DEFAULT: '#00B06D', //buttons
          foreground: '#8E99A4', // paragraph and menu items
          dark: '#14181C', // background color
          card: '#191E23', //cards
        },
        secondary: {
          DEFAULT: '#F5F7F7',
          foreground: '#7F8191',
          heading: '#DCEBFA',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        btn: '0px 8px 8px 0px rgba(255, 255, 255, 0.25) inset, 0px -8px 8px 0px rgba(0, 0, 0, 0.25) inset',
      },
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      mono: ['var(--font-mont)'],
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ theme, addUtilities, addComponents }) {
      addComponents({
        '.cta-button': {
          boxShadow:
            '0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 15px 0px rgba(255, 111, 97, 0.40)',
          background:
            'radial-gradient(50% 50% at 50% 50%, #FF6F61 0%, #FB4F3F 100%)',
        },
        '.primary': {
          background:
            'radial-gradient(39.35% 50% at 50% 50%, #04E8BF 8.85%, #00C29F 100%)',
          boxShadow:
            '0px 4px 15px 0px rgba(0, 194, 159, 0.40), 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset',
        },
        '.website-button': {
          boxShadow:
            '0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 15px 0px rgba(255, 111, 97, 0.40)',
          background:
            'radial-gradient(50% 50% at 50% 50%, #FF4F3F 0%, #FF0000 100%)',
        },
        '.social-media-button': {
          background:
            'radial-gradient(39.35% 50% at 50% 50%, #7471FA 0%, #4D4AF0 100%)',
          boxShadow:
            '0px 4px 15px 0px rgba(77, 74, 240, 0.40), 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset',
        },
        '.email-button': {
          background:
            'radial-gradient(39.35% 50% at 50% 50%, #669BFF 8.85%, #286CEE 100%)',
          boxShadow:
            '0px 4px 15px 0px rgba(40, 108, 238, 0.40), 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset',
        },
        '.script-button': {
          background:
            'radial-gradient(39.35% 50% at 50% 50%, #FFCB7C 8.85%, #FD9800 100%)',
          boxShadow:
            '0px 4px 15px 0px rgba(253, 152, 0, 0.40), 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset',
        },
        '.mask-scrollbar': {
          backgroundColor: 'var(--background)',
          mask: 'linear-gradient(0deg,white,transparent 10%,transparent 90%,white)',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
