import { styled } from "styled-components"

const Section = styled('section')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.primary};
    height: 80px;
    padding: 2rem;

    @media (max-width:480px) {
        justify-content: center;
        gap: 10px;
    }
`

const StlyedDiv = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

`
const StyledImg = styled('img')`
    width: 70px;
    cursor: pointer;

    /* @media (max-width:480px) {
        display: none;
    } */
    
`
const StyledSelect = styled('select')`
   padding: 8px;
   border-radius: 5px;
   background: transparent;
   color: #ffff;
   border: 2px solid #FFF;
   cursor: pointer;
   font-family: 'Poppins', sans-serif;

   @media (max-width:480px) {
        font-size: 16px;
    }
 `

const StyledOption = styled('option')`
   text-transform: capitalize;
   color: #000;
`


export { Section, StlyedDiv, StyledImg, StyledSelect, StyledOption }