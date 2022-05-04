import { createTheme } from "@mui/material/styles";
// import { black } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    // background: {
    //   light: white,
    // },
    common: {
      white: "#F7F7F7",
    },
    primary: {
      dark: "#DEA03F",
      main: "#E3F6FC",
    },
    text: {
      primary: "#52585D",
      secondary: "rgba(0,0,0,0.54)",
    },
  },
});
