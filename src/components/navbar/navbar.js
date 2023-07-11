import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"

const NavBar = ({ hideSelect, setSelectedType }) => {

    const [types, setTypes] = useState([])
   
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then((types) => {
                setTypes(types.data.results)
            })
    }, [])

    const handleTypeChange = (e) => {
        const selectedType = e.target.value
        setSelectedType(selectedType)
    }


    // useEffect(() => {
    //     if (selectedType === 'all') {
    //         return
    //     }

    //     if (selectedType) {
    //         axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`)
    //             .then((type) => {
    //                 const filteredPokemons = type.data.pokemon.map((pokemon) => {
    //                     return {
    //                         name: pokemon.pokemon.name,
    //                         url: pokemon.pokemon.url,
    //                     }
    //                 })
    //             })
    //     }
    // }, [selectedType])

    

    return (
        <Section theme={theme}>
            <StlyedDiv>
                <Img src="/assets/logo-pokemon.png" alt="Logo do Pokemon" onClick={() => navigate("/")} />
                {!hideSelect && (
                    <Select name="select" onChange={handleTypeChange}>
                        <Option value="all">Filter by Type</Option>
                        {types.map((type, index) => {
                            return (
                                <Option key={index} value={type.name}>{type.name}</Option>
                            )
                        })}
                    </Select>
                )}
            </StlyedDiv>
            <StlyedDiv>
                <ThemeTogglerButton />
            </StlyedDiv>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.primary};
    height: 80px;
    padding: 2rem;
`
const StlyedDiv = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
`

const Img = styled.img`
    width: 70px;
    cursor: pointer;
    
`
const Select = styled.select`
   padding: 10px;
   border-radius: 5px;
   background: transparent;
   color: #ffff;
   border: 2px solid #FFF;
   cursor: pointer;
 `

const Option = styled.option`
   text-transform: capitalize;
   color: #000;
`

export { NavBar }