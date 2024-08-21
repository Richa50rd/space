/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        robotomono: ['"Roboto Mono"', "monospace"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
        josefinsans: ['"Josefin Sans"', "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
        platypi: ['"Platypi"', "serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      colors: {
        color: "rgb(135, 136, 140)",
      },
    },
  },
  plugins: [],
};
