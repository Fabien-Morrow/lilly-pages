/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        dancing: ["Dancing Script"],
      },
      colors: {
        "custom-blue": "#111A40",
        "custom-green": "#689A77",
      },
      gridTemplateRows: {
        massages:
          "minmax(0, 1fr) minmax(0, 1fr) 40px minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
