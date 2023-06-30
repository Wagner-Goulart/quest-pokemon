import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <StyledFooter theme={theme}>
            <span>Feito por Wagner Goulart</span>
        </StyledFooter>
    )
}

const StyledFooter = styled('footer')`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.color };
    padding: 5px;
    height: 47px;
`

export { Footer }

