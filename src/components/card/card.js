import { useContext } from "react"
import { StyledCard  } from "./cardStyles"
import { ThemeContext } from "../../contexts/theme-context"

const Card = ({children}) => {

    const { theme } = useContext(ThemeContext)

    return (
        <StyledCard theme={theme}>{children}</StyledCard>
    )
}


export { Card }