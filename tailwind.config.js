/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",    // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      mobile: '480px',
      minitablet: '768px',
      tablet: '1024px',
      laptop: '1280px',
      desktop: '1536px',
    },
    extend: {
      maxWidth: {
        content: '72rem',   // 1152px → main content
        wide: '80rem',      // 1280px → dashboards
        narrow: '48rem',    // 768px → forms, auth pages
        prose: '65ch',      // readable text width
      },
      colors: {
        bg: {
          primary: "#FFFFFF",
          secondry: "#F5F0FB",
          bg01: "#E0D2F3",
          "menubar-dark": "rgba(168, 162, 230, 0.2)",
          "submenubar-dark": "rgba(168, 162, 230, 1)"
        },
        avesta: "#6366f1",
        primary: "#1D0B4D",
        secondary: "#3F374B",
        orange: "#D06026",
        black02: "#1C1B1B",
        red: "#E24D00"
      },
      backgroundImage: {
        "dark-radial": "radial-gradient(ellipse at top, #45187D85, #07001085 44%, #1B123075 88%)",
        "dark-radial-02": "linear-gradient(274deg, #e168f808, #2d1054bf, #e168f808)",
        "footer": 'url("/imgs/bg-footer.webp")',
        "dark-footer": 'url("/imgs/bg-footer-dark.webp")',
      },
      boxShadow: {
        'left-side': "4px 0px 16px -3px #000000AA"
      },
      fontFamily: {
        iranyekan: ['var(--font-iranyekan)', 'sans-serif'],
      },
      fontSize: {
        "Body": ['14px', { lineHeight: '20px' }],
        "BodyL": ['16px', { lineHeight: '26px' }],
        "Bold": ['36px', { lineHeight: 'auto' }],
        "ExtraBold": ['48px', { lineHeight: 'auto' }],
        "TitleM": ['18px', { lineHeight: '28px' }],
        "TitleL": ['20px', { lineHeight: '32px' }],
        "HeadingMx": ['26px', { lineHeight: 'auto' }],
        "HeadingM": ['22px', { lineHeight: 'auto' }],
        "HeadingL": ['32px', { lineHeight: 'auto' }],
        "Display2xl": ['48', { lineHeight: '100' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      }
    },
  },
  variants: {
    extend: {
      direction: ['responsive'], // This enables responsive variants for direction utilities
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'), // Add this
  ],
}
