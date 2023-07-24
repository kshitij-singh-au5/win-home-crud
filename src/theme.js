import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
  typography: {
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "30px",
    },
    h5: {
      fontSize: "16px",
      lineHeight: "19.36px",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "22.16px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "12px",
      lineHeight: "14.52px",
      fontWeight: 400,
    },
  },
});
