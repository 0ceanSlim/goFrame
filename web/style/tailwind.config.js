/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--color-bgPrimary)",
        bgSecondary: "var(--color-bgSecondary)",
        bgInverted: "var(--color-bgInverted)",
        textPrimary: "var(--color-textPrimary)",
        textSecondary: "var(--color-textSecondary)",
        textMuted: "var(--color-textMuted)",
        textInverted: "var(--color-textInverted)",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      borderWidth: {
        5: "5px",
      },
    },
  },
  plugins: [],
};
