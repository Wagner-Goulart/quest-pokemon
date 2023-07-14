import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Section, StlyedDiv, StyledImg, StyledSelect, StyledOption } from "./navbarStyles"
import { ThemeContext } from "../../contexts/theme-context"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"


const NavBar = ({ hideSelect, setSelectedType }) => {

    const [types, setTypes] = useState([])
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()

    useEffect(() => {
   
        const fetchTypes = ()=> {
            axios.get('https://pokeapi.co/api/v2/type/')
            .then((types) => {
                setTypes(types.data.results ?? [])
            })
            .catch((erro) => {
                console.log('Erro na requisão', erro)
                alert('A wild error appears! Please try again later.')
            })
        }

        fetchTypes()

    }, [])

    const handleTypeChange = (e) => {
        const selectedType = e.target.value
        setSelectedType(selectedType)
    }

    return (
        <Section theme={theme}>
            <StlyedDiv>
                <StyledImg src='/assets/logo-pokemon.png' alt='Logo do Pokemon' onClick={() => navigate('/')} />
                {!hideSelect && (
                    <StyledSelect name='select' onChange={handleTypeChange}>
                        <StyledOption value='all'>Filter by Type</StyledOption>
                        {types.map(({name}, index) => {
                            return (
                                <StyledOption key={index} value={name}>{name}</StyledOption>
                            )
                        })}
                    </StyledSelect>
                )}
            </StlyedDiv>
            <StlyedDiv>
                <ThemeTogglerButton />
            </StlyedDiv>
        </Section>
    )
}

export { NavBar }