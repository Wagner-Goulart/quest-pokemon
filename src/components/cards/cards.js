import { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "../card/card"


const randomNums = (max) => {
    return Math.floor(Math.random() * max + 1)
}

const Cards = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        function fetchData() {
            let endpoints = []

            for (let i = 1; i <= 10; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${randomNums(1000)}/`)
            }

            axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                (data) => setPokemons(data),
            );
        }

        fetchData()
    }, [])
    
    return (
        <section>
            <ul>
                {pokemons.map((pokemon, index) => {
                    return (
                        <Card key={index}>
                            <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name}></img>
                            <p>{pokemon.data.name}</p>
                        </Card>
                    )
                })}
            </ul>
        </section>
    )
}

export { Cards }