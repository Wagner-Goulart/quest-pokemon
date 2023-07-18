import { useContext } from "react"
import { StyledFooter } from "./footerStyles"
import { ThemeContext } from "../../contexts/theme-context"

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <StyledFooter theme={theme}>
            <a href="https://github.com/Wagner-Goulart" target="_blank">Feito por Wagner Goulart</a>
        </StyledFooter>
    )
}


export { Footer }

