import axios from "axios"
import { useEffect, useState } from "react"
import { styled } from "styled-components"

const NavBar = () => {

    const [types, setTypes] = useState([])

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then((types)=> {
                setTypes(types.data.results)
            })
    }, [])

    return (
        <Section>
            <Img src="/assets/logo-pokemon.png" alt="Logo do Pokemon"/>
            <Select name="select">
                <Option value="none">Filter by Type</Option>
                {types.map((type, index)=> {
                    return (
                        <Option key={index} value={type.name}>{type.name}</Option>
                    )
                })}
            </Select>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    gap: 3rem;
    align-items: center;
    background-color: #4b538b;
    height: 80px;
    padding: 2rem;
`

const Img = styled.img`
    width: 70px;
    
`
const Select = styled.select`
   padding: 10px;
   border-radius: 5px;
   background: transparent;
   color: #ffff;
   border: 2px solid #FFF;
   cursor: pointer;
 `

 const Option = styled.option`
   text-transform: capitalize;
   color: #000;
`

export { NavBar }