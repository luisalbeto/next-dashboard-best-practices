import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: 'Favoritos',
  description: 'Pokedex page'
}


export default async function PokemonsPage() {

  return(
    <div className="flex flex-col">

      <span className="text-3xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
     <FavoritePokemons/> 

    

    </div>
  )
}

