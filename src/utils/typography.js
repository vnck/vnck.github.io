import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: [
    "Work Sans",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto Slab", "serif"],
  bodyWeight: 400,
  headerWeight: 200,
  googleFonts: [
    {
      name: 'Work Sans',
      styles: [
        '200',
        '300',
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