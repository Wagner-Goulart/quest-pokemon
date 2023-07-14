import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const Button = (props) => {
    const {theme} = useContext(ThemeContext)

    return <StyledButton theme={theme} {...props}/>
}

const StyledButton = styled('button') `
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding: 7px;
    border-radius: 10px;
    background-color: ${ props => props.theme.secundary};
    color: ${props => props.theme.color };
    border: none;
    cursor: pointer;
    font-weight: 700;
    transition: 0.3s;
    font-family: 'Poppins', sans-serif;
    &:hover {
        opacity: 0.9;
        transform: scale(1.07);
    }


`

export { Button }