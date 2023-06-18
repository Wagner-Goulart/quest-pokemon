import axios from "axios"
import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import { NavBar } from "../components/navbar/navbar"

const PokemonDetails = () => {
    
    const [details, setDetails] = useState({})
    const { id } = useParams()
    
    

    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((details)=> {
               setDetails(details)
               console.log(details)
            })
    },[id])

    
   console.log(details)

    return (
        <>
            <NavBar />
            <h1>{details.name}</h1>
        </>
    )
}

export { PokemonDetails }
