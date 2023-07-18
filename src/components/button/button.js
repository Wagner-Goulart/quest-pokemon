import { useContext } from "react"
import { StyledButton } from "./buttonStyles"
import { ThemeContext } from "../../contexts/theme-context"

const Button = (props) => {
    const {theme} = useContext(ThemeContext)

    return <StyledButton theme={theme} {...props}/>
}

export { Button }