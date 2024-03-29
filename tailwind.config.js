/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/main.js", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        work: "'Work Sans', sans-serif",
        nunito: "'Nunito', sans-serif",
      },
      fontSize: {
        // sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
        // base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
        // lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        // xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        // "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        // "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        // "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        // "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        // "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
      },
      colors: {
        primary: {
          500: "#333333",
        },
        accents: {
          400: "#FFADAD",
          600: "#E2445C",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#FEDADA",
          300: "#C4C4C4",
        },
      },
    },
  },
  plugins: [],
};
