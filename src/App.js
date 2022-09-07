import { lightBlue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: lightBlue[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>HELLO</div>
    </ThemeProvider>
  );
}

export default App;
