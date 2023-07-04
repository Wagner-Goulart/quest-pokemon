import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"
import { FaSun, FaMoon } from "react-icons/fa"
import { styled } from "styled-components"


export const ThemeTogglerButton = () =>{
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <Button onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light)}>
            {theme === themes.light ? <StyledSunIcon /> : <StyledMoonIcon />}
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
