import { Cards } from "./components/cards/cards";
import { Home } from "./pages/home";
import { createGlobalStyle} from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <Cards />
     
    </>
   
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    
  }
`

export default App;
