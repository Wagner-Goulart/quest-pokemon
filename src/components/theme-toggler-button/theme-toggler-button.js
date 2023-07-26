import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"
import { FaSun, FaMoon } from "react-icons/fa"
import { styled } from "styled-components"


export const ThemeTogglerButton = () =>{
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
   
        const newTheme = theme ===  themes.light ? themes.dark : themes.light

        setTheme(newTheme)
    }

    return (
        <Button onClick={()=> toggleTheme()}>
            {theme === themes.light ? 'light': 'dark'} 
        </Button>
    )
}

const StyledSunIcon = styled(FaSun)`
    color: #FAF13E;
    font-size: 1.5rem;

`

const StyledMoonIcon = styled(FaMoon)`
    font-size: 1.5rem;
`
