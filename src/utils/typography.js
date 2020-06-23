import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: [
    "Roboto",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto Slab", "serif"],
  headerWeight: 100,
  bodyWeight: 400,
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '100',
      ],
    },
    {
      name: 'Roboto Slab',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  
})

export default typography