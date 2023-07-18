import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";
import { ThemeProvider } from "./contexts/theme-context";

function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
          <AppRoutes />
      </ThemeProvider>
    </>

  );
}

const GlobalStyles = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    
  }

  ul {
    list-style: none;
    color: #000;
  }

  a {
    text-decoration: none;
    color: #000;
  }

`

export default App;
