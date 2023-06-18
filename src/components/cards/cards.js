import { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "../card/card"
import { styled } from "styled-components"
import { Link } from "react-router-dom"



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
        <Section>
            <Ul>
                {pokemons.map((pokemon, index) => {
                    return (
                        <Link to = {`/pokemon-details/${ pokemon.data.id }`}>
                            <Card key={index} >
                                <Img src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
                                <P value={pokemon.data.name}>{pokemon.data.name}</P>
                            </Card>
                        </Link>
                    )
                })}
            </Ul>
        </Section >
    )
}

const Section = styled('section')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D4D9FD;
    min-height: 87vh;
    padding: 1rem;
`

const Ul = styled('ul')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #8896FC;
    max-width: 1000px;
    gap: 3rem;
    padding: 1rem;
    border-radius: 5px;
`
const Img = styled('img')`
    width: 100px;
    height: 100px;
`
const P = styled('p')`
    font-weight: bolder;
    text-transform: capitalize;
    font-size: 1.2rem;

`



export { Cards }