import { createGlobalStyle} from "styled-components";
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
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
  }
`

export default App;
