module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    columnCount: [1, 2, 4],
    colors: {
      primary: "#101820",
      secondary: "#FFFFFF",
      accent: "#FEE715",
      'accent-dark': "#004ca0",
      'casestudy-gthr': "#ffe8ae",
    },
    fontFamily: {
      display: ['"IBM Plex Mono"', 'monospace'],
      body: ['"IBM Plex Sans"', 'sans-serif']
    },
    fontSize: {
      body: ['1rem', '1.618rem'],
      heading: ['2rem', '3.236rem'],
      display: ['4rem', '6.472rem'],
      number: ['8rem', '8rem'],
    },
    extend: {
      backgroundImage: {
        'logo': "url(images/icons/logo.svg)",
        'toggle-night': "url(images/icons/daynight/night-toggle.svg)",
        'toggle-day': "url(images/icons/daynight/day-toggle.svg)",
        'hamburger': "url(images/icons/Hamburger_icon.svg)",
        'hero-mockup-1': "url(images/mockups/ch1.png)",
        'hero-mockup-2': "url(images/mockups/mpp2.png)",
        'mockup-img-gthr-1': "url(images/mockups/gthr1.png)",
        'mockup-img-gthr-2': "url(images/mockups/gthr2.png)",
        'mockup-img-mpp-1': "url(images/mockups/mpp1.png)",
        'mockup-img-mpp-2': "url(images/mockups/mpp2.png)",
        'mockup-img-dhs-1': "url(images/mockups/dhs1.png)",
        'mockup-img-dhs-2': "url(images/mockups/dhs2.png)",
        'mockup-img-ch-1': "url(images/mockups/ch1.png)",
        'mockup-img-ch-2': "url(images/mockups/ch2.png)",
        'mockup-img-h2r-1': "url(images/mockups/h2r1.png)",
        'mockup-img-h2r-2': "url(images/mockups/h2r2.png)",
        'skills-ux-light': "url(images/skillspics/uxskills-day.png)",
        'skills-ux-dark': "url(images/skillspics/uxskills.png)",
        'skills-dev-light': "url(images/skillspics/devskills-day.png)",
        'skills-dev-dark': "url(images/skillspics/devskills.png)",
      }
    },
  },
  plugins: [
    require("tailwindcss-multi-column")(),
  ],
}
