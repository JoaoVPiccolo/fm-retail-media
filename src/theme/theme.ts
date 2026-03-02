import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a",
      paper: "#111111",
    },
    primary: {
      main: "#76A86F",
      light: "#A2FFA8",
    },
    secondary: {
      main: "#80ad79",
    },
    text: {
      primary: "#ffffff",
      secondary: "#A2FFA8",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Montserrat", "Ubuntu", sans-serif',
    // H1: Grande título para seções principais
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "clamp(2rem, 4vw, 3.5rem)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    // H2: Títulos de seções
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    // H3: Subtítulos importantes
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    // H4: Títulos pequenos/labels
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "clamp(1rem, 2vw, 1.5rem)",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    // H5: Subtítulos
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    // H6: Pequenos títulos
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "clamp(0.75rem, 1vw, 1rem)",
      fontWeight: 500,
      lineHeight: 1.6,
    },
    // Corpo de texto padrão
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    // Corpo de texto pequeno
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "clamp(0.875rem, 1vw, 1rem)",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    // Texto de destaque/impacto
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "#80ad79",
    },
    // Texto de suporte
    subtitle2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "clamp(0.875rem, 1vw, 1rem)",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#A2FFA8",
    },
    // Botões
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "clamp(0.875rem, 1vw, 1.125rem)",
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: "capitalize",
      letterSpacing: "0.02em",
    },
    // Captions
    caption: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "clamp(0.75rem, 0.9vw, 0.875rem)",
      fontWeight: 400,
      lineHeight: 1.4,
      color: "#A2FFA8",
    },
    // Overline
    overline: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "clamp(0.625rem, 0.8vw, 0.75rem)",
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@media (min-width:640px)": {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          "@media (min-width:1024px)": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
        },
      },
    },
  },
});
