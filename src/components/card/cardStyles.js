import { styled } from "styled-components"

const StyledCard = styled('li')`
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.theme.secundary};
    /* background-color: #6D78C9; */
    padding: 1rem;
    border-radius: 5px;
    width: 144px;
    height: 180px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }

`
export { StyledCard }