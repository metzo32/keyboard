module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'infinite-gradient': 'linear-gradient(90deg, #ff43ba, #f9ff33, #2bffd7, #2c75ff, #a05fff, #ff43ba)',
      },
      backgroundSize: {
        '200%': '200% 100%',
      },
      animation: {
        infiniteFlow: 'infiniteFlow 2s linear infinite',
      },
      keyframes: {
        infiniteFlow: {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '0% 0' },
        },
      },
    },
  },
  
  plugins: [],
};
