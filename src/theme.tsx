import { extendTheme } from "@chakra-ui/react"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
const theme = extendTheme({
    colors: {
      brand: {
        100: "#FFFCFC",
        // ...
        900: "#1a202c",
      },
      purple:{
        100:"rgba(72, 30, 191, 0.1)",
      },
      red:{
          100:"rgba(226, 25, 25, 0.1)"
      },
      green:{
          100:"rgba(24, 157, 2, 0.1)"
      },
     
    },
    fonts:{
        heading: "Poppins",
        body: "Poppins",
      },
     
      textStyles: {
          //Available Balance Styles
      alphabal :{
          fontSize: "96px",
          color:"#481ebf",
          fontWeight:"semibold"
      },
      alphatext:{
        fontSize: "36px",
        color:"#481ebf",
        fontWeight:"semibold"
      },
      // Total Inflow Styles
      betabal:{
         fontSize:"64px",
         color:"#189D02",
         fontWeight:"semibold"
      },
      betatext:{
          fontSize:"36px",
          color:"#189D02",
          fontWeight:"semibold"
      },
      //Total Outflow Styles
      kappabal:{
        fontSize:"64px",
        color:"#E21919",
        fontWeight:"semibold"
     },
     kappatext:{
         fontSize:"36px",
         color:"#E21919",
         fontWeight:"semibold"
     },
      },
    }
  
 

  )
  export default theme
