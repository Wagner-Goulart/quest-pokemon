import { NavBar } from "../components/navbar/navbar"
import { PokemonsList } from "./pokemons-list"

const Home = () => {
    return (
        <>
            <NavBar />
            <PokemonsList />
        </>
    )
}

export { Home }