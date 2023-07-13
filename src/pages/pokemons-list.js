import { Cards } from "../components/cards/cards"


const PokemonsList = ({selectedType}) => {
    
    return <>
        <Cards selectedType={selectedType} />
    </>
}

export { PokemonsList }