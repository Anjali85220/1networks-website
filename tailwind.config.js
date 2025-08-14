/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E10600",      // primary accent (from your red spiral theme)
          dark: "#0B0F1A",     // near-black
          gray: "#111827"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: [],
};
