export default {
  mode: "jit", // Enable JIT mode
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure Tailwind knows where to look for class names
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
