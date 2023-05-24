import { useEffect } from "react";
import { useFetch } from "../hook/useFetch";
import { useCounter } from "../hook/useCounter";

export const MultiplesCustomHooks = () => {

   const { counter, increment, decrement } = useCounter(1)

   const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

   //TODO: SI la data tiene un valor entonces toma ese valor por lo contrario queda en undefined
   const { sprites, name } = !!data && data
   const img = (!isLoading) ? sprites.other.dream_world.front_default : null


   return (
      <>    <h1>Breaking Bad Quote</h1>
         {
            (isLoading)
               ? (
                  <h1>Cargando...</h1>
               )
               : (
                  <blockquote className="blockquote">
                     <img className="mb-4" src={img} alt={name}></img>
                     <footer className="blockquote-footer">{name}</footer>
                  </blockquote>
               )
         }

         {
            (counter > 1)
               ? (
                  <div>
                     <button onClick={decrement}>Anterior</button>
                     <button onClick={increment}>Siguiente</button>
                  </div>
               )
               : (
                  <button onClick={increment}>Siguiente</button>
               )
         }



      </>
   )
};
