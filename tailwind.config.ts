import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-blue': 'rgb(var(--color-deep-blue) / <alpha-value>)',
        'soft-white': 'rgb(var(--color-soft-white) / <alpha-value>)',
        
        // Secondary Colors
        'teal': 'rgb(var(--color-teal) / <alpha-value>)',
        'warm-gray': 'rgb(var(--color-warm-gray) / <alpha-value>)',
        
        // Accent Colors
        'amber': 'rgb(var(--color-amber) / <alpha-value>)',
        'rose': 'rgb(var(--color-rose) / <alpha-value>)',
        
        // Functional Colors
        'success': 'rgb(var(--color-success) / <alpha-value>)',
        'warning': 'rgb(var(--color-warning) / <alpha-value>)',
        'error': 'rgb(var(--color-error) / <alpha-value>)',
      },
      fontFamily: {
        'sans': ['Inter', 'Source Sans Pro', 'ui-sans-serif', 'system-ui'],
        'heading': ['Inter', 'ui-sans-serif', 'system-ui'],
        'body': ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '0.25': '0.0625rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
