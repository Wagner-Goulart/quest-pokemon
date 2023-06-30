import { NavBar } from "../components/navbar/navbar"
import { PokemonsList } from "./pokemons-list"
import { Footer } from "../components/footer/footer"

const Home = () => {
    return (
        <>
            <NavBar />
            <PokemonsList />
            <Footer />
        </>
    )
}

export { Home }