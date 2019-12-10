import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

export default merge(defaultThemeColors, {
  text: '#333',
  primary: '#D9501E',
  modes: {
    dark: {
      background: "#282c35",
      primary: '#F29A2E',
    },
  },
})
