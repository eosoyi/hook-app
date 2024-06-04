import React from "react"

interface Props {
    id: string,
    name: string,
    sprites?: []
}

export const PokemonCard: React.FC<Props> = ({ id, name, sprites }) => {
    return (
        <section style={{ height: '200px' }}>
            <h2>#{id} - {name}</h2>
            <div>
                {
                    sprites?.map(sprite => (
                        <img key={sprite} src={sprite} alt={name} style={{ height: '200px'}} />
                    ))
                }
            </div>
        </section>
    )
}