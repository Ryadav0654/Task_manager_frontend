/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // HTML file in root
    "./src/**/*.{js,ts,jsx,tsx}", // Source files
  ],
  theme: {
    extend: {
      boxShadow: {
        // 'card': '0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [],
}

