import { alpha, createTheme } from "@mui/material";

export function createAppTheme(mode = "dark") {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: "rgb(80 27 148)", light: "rgb(80 27 148)", dark: "rgb(80 27 148)" },
      secondary: { main: "#b23a2f", light: "#e57a61", dark: "#741d19" },
      background: {
        default: isDark ? "#090909" : "#f8f1e8",
        paper: isDark ? "#121212" : "#fffaf4"
      },
      success: { main: "#8fd0a6" },
      warning: { main: "rgb(80 27 148)" },
      text: {
        primary: isDark ? "#fff7ef" : "#261712",
        secondary: isDark ? "#cfb49d" : "#6e5449"
      },
      divider: isDark ? "rgba(179, 140, 255, 0.12)" : "rgba(80, 27, 148, 0.12)"
    },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: '"Aptos","Segoe UI","Helvetica Neue",Arial,sans-serif',
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 700, letterSpacing: "-0.02em" },
    h5: { fontWeight: 650, letterSpacing: "-0.01em" },
    h6: { fontWeight: 650, letterSpacing: "-0.01em" },
    subtitle1: { fontWeight: 600 },
    overline: { letterSpacing: "0.14em", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 }
  },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: isDark
              ? "radial-gradient(circle at top left, rgba(80,27,148,0.18), transparent 22%), radial-gradient(circle at top right, rgba(255,255,255,0.03), transparent 20%), linear-gradient(180deg, #131313 0%, #070707 100%)"
              : "radial-gradient(circle at top left, rgba(224,164,63,0.18), transparent 18%), radial-gradient(circle at top right, rgba(178,58,47,0.10), transparent 22%), linear-gradient(180deg, #fff8f1 0%, #f4eadf 100%)",
            backgroundAttachment: "fixed"
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none"
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined"
        },
        styleOverrides: {
          root: {
            backgroundColor: isDark ? alpha("rgb(80 27 148)", 0.08) : alpha("rgb(80 27 148)", 0.03),
            borderRadius: 10
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            paddingInline: 18,
            color: "#ffffff"
          },
          containedPrimary: {
            background: "rgb(80 27 148)"
          },
          outlined: {
            color: "#ffffff",
            borderColor: alpha("rgb(80 27 148)", 0.42)
          },
          text: {
            color: "#ffffff"
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(18px)"
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 10
          }
        }
      }
    }
  });
}
