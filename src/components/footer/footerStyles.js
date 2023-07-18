import { styled } from "styled-components"

const StyledFooter = styled('footer')`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.color };
    padding: 5px;
    height: 48px;
`
export { StyledFooter }