import { styled } from "styled-components"

const StyledDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 127px);
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
`
export { StyledDiv }