import { styled } from "styled-components"

const Button = ({children, func}) => {
    return <StyledButton onClick={func}>{children}</StyledButton>
}

const StyledButton = styled('button') `
    margin-top: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #8896FC;
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