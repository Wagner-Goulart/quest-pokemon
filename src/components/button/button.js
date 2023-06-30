import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const Button = (props) => {
    const {theme} = useContext(ThemeContext)

    return <StyledButton theme={theme} {...props}/>
}

const StyledButton = styled('button') `
    margin-top: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${ props => props.theme.secundary};
    color: ${props => props.theme.color };
    /* background-color: #8896FC; */
    border: none;
    width: 180px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
        opacity: 0.9;
        transform: scale(1.07);
    }
`

export { Button }