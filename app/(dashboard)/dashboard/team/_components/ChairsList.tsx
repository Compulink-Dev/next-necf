import React from 'react'
import ChairsCard from './ChairsCard'

function ChairsList({ chairs }: any) {
    return (
        <div>
            {chairs.map((chair: any) => (
                <ChairsCard
                    id={chair.id}
                    key={chair.id}
                    title={chair.title}
                    link={chair.link}
                    position={chair.position}
                    image={chair.image}
                />
            ))}
        </div>
    )
}

export default ChairsList