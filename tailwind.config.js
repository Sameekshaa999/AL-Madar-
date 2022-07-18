module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "14.28%",
        "5/6": "83.333334%",
      },
      colors: {
        white: {
          DEFAULT: "#fff",
          800: "rgba(255, 255, 255, 0.80)",
        },
        mpurple: "#25215c",
        mblue: "#69c7ed",
        mgrey: "#231f20",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
