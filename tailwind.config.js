/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1e293b", // Background for card
        "secondary-dark": "#334155", // Border color
        "highlight-dark": "#1d4ed8", // Button background
        "text-dark": "#cbd5e1", // Light text color
        "bg-dark": "#0f172a", // Page background
      },
    },
  },
  plugins: [],
};
