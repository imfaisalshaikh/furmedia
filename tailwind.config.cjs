module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  safelist: [
    { pattern: /text-\[#[0-9A-Fa-f]{6}\]/ },
    { pattern: /bg-\[#[0-9A-Fa-f]{6}\]/ },
    { pattern: /border-\[#[0-9A-Fa-f]{6}\]/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
