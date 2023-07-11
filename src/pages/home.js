import { NavBar } from "../components/navbar/navbar"
import { PokemonsList } from "./pokemons-list"
import { Footer } from "../components/footer/footer"
import { useState } from "react"

const Home = () => {

    const [selectedType, setSelectedType] = useState()

    return (
        <>
            <NavBar setSelectedType={setSelectedType} />
            <PokemonsList selectedType={selectedType} />
            <Footer />
        </>
    )
}

export { Home }