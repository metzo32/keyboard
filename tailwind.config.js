module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "infinite-gradient":
          "linear-gradient(90deg, #ff43ba, #f9ff33, #2bffd7, #2c75ff, #a05fff, #ff43ba)",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      animation: {
        infiniteFlow: "infiniteFlow 1.5s linear infinite",
      },
      keyframes: {
        infiniteFlow: {
          "0%": { "background-position": "200% 0" },
          "100%": { "background-position": "0% 0" },
        },
      },

      colors: {
        'custom-purple': {
          DEFAULT: '#431381', 
          20: 'rgba(67, 19, 129, 0.2)', // 20% 투명도
          50: 'rgba(67, 19, 129, 0.5)', // 50% 투명도
        },
        'custom-blue': {
          DEFAULT: '#1e80e9', 
          20: 'rgba(30, 128, 233, 0.2)', // 20% 투명도
          50: 'rgba(30, 128, 233, 0.5)', // 50% 투명도
        },
      },
      screens: {
        'custom-sm': '480px',
      },
    },
  },

  plugins: [],
};
