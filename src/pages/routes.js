import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { PokemonDetails } from "./pokemon-details";


const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home  />} />
                <Route exact path="/pokemon-details/:id" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }