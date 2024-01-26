import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";

export const loginTheme = extendTheme({
  layerStyles: {
    loginHeading: {
      fontSize: "64px",
      width: "303px",
      height: "50px",
      color: "#ffffff",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "800",
      lineHeight: "90px",
      marginTop: "10px",
      letterSpacing: "0em",
      marginLeft: "5%",
    },

    loginSubHeading: {
      width: "242px",
      height: "36px",
      color: "#FFFFFF",
      fontFamily: "poppins",
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "55px",
      marginTop: "20px",
      marginLeft: "2%",
    },

    rightLoginFlex: {},
  },
});
