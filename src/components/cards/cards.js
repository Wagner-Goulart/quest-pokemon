import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Card } from "../card/card"
import { Section, Ul, Img, P } from "./cardsStyles"
import { Link } from "react-router-dom"
import { Button } from "../button/button"
import { ThemeContext } from "../../contexts/theme-context"
import { Loader } from "../loader/loader"


const randomNums = (max) => {
    return Math.floor(Math.random() * max + 1)
}

const Cards = ({ selectedType }) => {

    const [pokemons, setPokemons] = useState([])
    const [randomPokemons, setRandonPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const { theme } = useContext(ThemeContext)


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
                    const requests = endpoints.map((endpoint) => axios.get(endpoint))

                    Promise.all(requests)
                        .then((responses) => {
                            const updatedPokemons = responses.map((response) => response)

                            setPokemons(updatedPokemons)
                            setLoading(false)
                        })
                        .catch((error) => {
                            console.error('Erro ao buscar o tipo de pokemon: ', error)
                            setLoading(false)
                        })
                })
                .catch((error) => {
                    console.error('Erro ao buscar o tipo de pokemon: ', error)
                    setLoading(false)
                })

        } else {
            setLoading(true)

            const fetchData = async() => {
               
                try {
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
                } catch (error) {
                    console.erro('Erro ao buscar os dados dos Pokémon: ', error)
                }
            }

            fetchData()
        }


    }, [selectedType])

    const AddPokemons = () => {
        try {
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
        } catch (error) {
            console.erro('Erro ao carregar novas Pokémons: ', error)
        }
 
    }

    if (loading) {
        return (
            < Loader />
        )
    }

    return (
        <Section theme={theme}>

            <Ul theme={theme}>
                {pokemons.map(({data}) => {
                    return (
                        <Link to={`/pokemon-details/${data.id}`} key={data.id}>
                            <Card>
                                <Img src={data.sprites.front_default} alt={data.name} />
                                <P theme={theme}>{data.name}</P>
                            </Card>
                        </Link>
                    )
                })}
            </Ul>
            <Button onClick={AddPokemons}>Carregar Mais</Button>
        </Section >
    )
}

export { Cards }
