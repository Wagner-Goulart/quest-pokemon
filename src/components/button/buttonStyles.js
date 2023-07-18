import { styled } from "styled-components"

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

    @media (max-width:480px) {
        font-size: 16px;
        padding: 8px;
        margin-bottom: 10px;
    }
    


`
export { StyledButton }