import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import "../styles/theme.scss"

//Wordpress2016.overrideThemeStyles = () => {
//  return {
//    "a.gatsby-resp-image-link": {
//      boxShadow: `none`,
//    },
//  }
//}

//delete Wordpress2016.googleFonts

bootstrapTheme.overrideThemeStyles = () => ({
  a: {
    color: "var(--textLink)",
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  "a.anchor": {
    boxShadow: "none",
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  hr: {
    background: "var(--hr)",
  },
})

//const typography = new Typography(Wordpress2016)
const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
