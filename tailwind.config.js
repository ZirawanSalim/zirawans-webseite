// tailwind.config.js
module.exports = {
      plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
  },

  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
};