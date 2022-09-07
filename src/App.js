import { CssBaseline } from "@mui/material";
import { brown, lightBlue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: lightBlue[500],
      },
      secondary: {
        main: brown[900],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
