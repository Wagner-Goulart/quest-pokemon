import { styled } from "styled-components"

const Section = styled('section')`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    padding: 1rem;
`

const Ul = styled('ul')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${props => props.theme.primary};
    max-width: 1000px;
    gap: 3rem;
    padding: 1rem;
    border-radius: 5px;
`

const Img = styled('img')`
    width: 100px;
    height: 100px;
`

const P = styled('p')`
    font-weight: bolder;
    text-transform: capitalize;
    color: ${props => props.theme.color};
    font-size: 1rem;
    overflow: hidden;

`

export { Section, Ul, Img, P }