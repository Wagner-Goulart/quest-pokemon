import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { NavBar } from "../components/navbar/navbar"
import { styled } from "styled-components"


const PokemonDetails = () => {

    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [ability, setAbilities] = useState([])
    const [pokemonAbility, setPokemonAbilities] = useState([])
    const { id } = useParams()



    useEffect(() => {
        function fetchData() {

            try {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    .then((details) => {
                        setDetails(details.data)
                        setAbilities(details.data.abilities)
                        setLoading(false)

                    })
            } catch (erro) {
                console.log('Erro na busca do pokemon' + erro)
                setLoading(false)
            }


        }

        fetchData()
    }, [id])

    useEffect(() => {
        async function fetchAbility() {
            try {
                const pokeAbilities = ability.map((pokeAbility) =>
                    axios.get(pokeAbility.ability.url)
                );
                const responses = await axios.all(pokeAbilities);
                const abilitiesData = responses.map((response) => response.data);
                setPokemonAbilities(abilitiesData);
            } catch (error) {
                console.log("Erro ao buscar habilidades: " + error);
            }
        }

        fetchAbility();
    }, [ability]);


    if (loading) {
        return (
            <>
                <NavBar hideSelect />
                <p>Estamos trabalhando nisso</p>
            </>
        )
    }

    return (
        <>
            <NavBar hideSelect />
            <Section>
                <Container>
                    <PokeCard>
                        <div>
                            {details.sprites && (
                                <Img src={details.sprites.front_default} alt="Pokemon Sprite" />
                            )}
                            {details.name && <h2>{details.name}</h2>}
                        </div>
                        <div>
                            {pokemonAbility.map((ability, index) => (
                                <div key={index}>
                                    <P >{ability.name} :</P>
                                    {ability.effect_entries && ability.effect_entries[1].short_effect && (
                                        <span>{ability.effect_entries[1].short_effect}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </PokeCard>
                    <PokeMoves>
                        <h1>Moves</h1>
                        {details.moves.map((move) => {
                            return <StyledSpan>{move.move.name} /</StyledSpan>
                        })}
                    </PokeMoves>
                </Container>
            </Section>
        </>
    )
}

const Section = styled('section')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #D4D9FD;
    min-height: 87vh;
    padding: 1rem;
`

const Container = styled('div')`
    background-color: #6D78C9;
    width: 500px;
    border-radius: 5px;
    text-transform: capitalize;
    padding: 1rem;
`
const PokeCard = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-bottom: 3rem;
`
const PokeMoves = styled('div')`
    text-align: center;
`

const Img = styled('img')`
    width: 150px;
`
const P = styled('p')`
    font-weight: bold;
    margin: 9px 0;
`

const StyledSpan = styled('span')`
    display: inline-block;
    margin: 5px;
    max-width: 400px;
`

export { PokemonDetails }
