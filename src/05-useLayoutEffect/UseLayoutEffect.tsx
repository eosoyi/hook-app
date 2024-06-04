import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const UseLayoutEffect = () => {
    const [counter, setCounter] = useState<number>(1);
    const { data, hasError, isLoading } = useFetch({ url: `https://pokeapi.co/api/v2/pokemon/${counter}` });


    return (
        <>
            <h1>Informacion del pokemon</h1>
            <hr />
            {
                isLoading
                    ? <LoadingMessage></LoadingMessage>
                    : <PokemonCard
                        id={data.id}
                        name={data?.name}
                        sprites={[data.sprites.front_default, data.sprites.back_default, data.sprites.front_shiny, data.sprites.back_shiny]} ></PokemonCard>
            }
            <button className="btn btn-primary"  onClick={() => counter <= 1 ? null : setCounter(counter - 1)} >Anterior</button>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)} >Siguiente</button>
        </>
    )
}