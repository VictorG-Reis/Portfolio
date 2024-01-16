/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
  extend: {
    dropShadow: {
      sm: '3px 3px 3px black;',
    },
    boxShadow: {
      '3xl': '14px 14px 16px 1px #000;',
    },
    animation: {
      zoom: 'zoom 20s',
      animaBanner: 'animaBanner 1s 0.5s forwards',
    },
    keyframes: {
      zoom: {
        '0%': { transform: 'scale(1.3)' },
        '100%': { transform: 'scale(1)' },
      },
      animaBanner: {
        '0%': { transform: 'translateY(10rem) rotateY(-30deg)' },

        '100%': {
          transform: 'translateY(0) rotateY(0)',
          opacity: '1',
        },
      },
    },
    gridTemplateColumns: {
      16: 'repeat(16, 1fr)',
    },
  },
  fontFamily: {
    Ubuntu: ['Ubuntu', 'sans-serif'],
    Bitter: ['Bitter', 'serif'],
  },
  screens: {
    sm: '359px',
    md: '768px',
    lg: '1024px',
  },
};
export const plugins = [];
