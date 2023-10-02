/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-soft-orange': 'var(--primary-soft-orange)',
        'primary-soft-red':'var(--primary-soft-red)',
        'neutral-off-white': 'var(--neutral-off-white)',
        'neutral-grayish-blue': 'var(--neutral-grayish-blue)',
        'neutral-dark-grayish-blue': 'var(--neutral-dark-grayish-blue)',
        'neutral-very-dark-grayish-blue': 'var(--neutral-very-dark-grayish-blue)',
      },
      gridTemplateColumns: {
        '1fr-34%': '1fr, 33%',
        'mobile': '1fr',
      },
      letterSpacing: {
        'ultra-wide': '0.2rem',
      },
      maxWidth: {
        'correct-width': '61rem',
      },
    },
  },
  plugins: [],
}