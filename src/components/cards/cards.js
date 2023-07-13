import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Card } from "../card/card"
import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { Button } from "../button/button"
import { ThemeContext } from "../../contexts/theme-context"
import { Loader } from "../loader/loader"


const randomNums = (max) => {
    return Math.floor(Math.random() * max + 1)
}

const Cards = ({selectedType }) => {
    const [pokemons, setPokemons] = useState([])
    const [randomPokemons, setRandonPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const { theme } = useContext(ThemeContext)

    console.log(pokemons)

    useEffect(() => {

        if (selectedType === 'all') {
           setPokemons(randomPokemons)
           return
        }

        if (selectedType) {
            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`)
                .then((type) => {
                    const selectedTypePokemon = type.data.pokemon
                    const endpoints = selectedTypePokemon.map((pokemon) => pokemon.pokemon.url)

                    const requests = endpoints.map((endpoint)=> axios.get(endpoint))

                    Promise.all(requests)
                        .then((responses)=> {
                            const updatedPokemons = responses.map((response)=>response)

                            setPokemons(updatedPokemons)
                            setLoading(false)
                        })
                })
        }else {
            function fetchData() {
                let endpoints = []

                for (let i = 1; i <= 10; i++) {
                    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${randomNums(1000)}/`)
                }

                axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                    (data) => {
                        setPokemons(data)
                        setRandonPokemons(data)
                        setLoading(false)
                    } 
                );

                
            }

            fetchData()
        }


    }, [selectedType])

    const AddPokemons = () => {
        function fetchNewPokemons() {
           
            let endpoints = []

            for (let i = 1; i <= 10; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${randomNums(1000)}/`)
            }

            axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                (newPokemons) => {
                    setPokemons([...pokemons, ...newPokemons])
                    
                }
            );
            
        }

        fetchNewPokemons()

    }
    
    if(loading) {
        return (
            < Loader />
        )
    }

    return (
        <Section theme={theme}>

            <Ul theme={theme}>
                {pokemons.map((pokemon, index) => {
                    return (
                        <Link to={`/pokemon-details/${pokemon.data.id}`} key={index}>
                            <Card>
                                <Img src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
                                <P theme={theme} value={pokemon.data.name}>{pokemon.data.name}</P>
                            </Card>
                        </Link>
                    )
                })}
            </Ul>
            <Button onClick={AddPokemons}>Carregar Mais</Button>
        </Section >
    )
}

const Section = styled('section')`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    /* height: 100vh; */
    padding: 1rem;
`

const Ul = styled('ul')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${props => props.theme.primary};
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
    color: ${props => props.theme.color};
    font-size: 1.2rem;

`

export { Cards }
