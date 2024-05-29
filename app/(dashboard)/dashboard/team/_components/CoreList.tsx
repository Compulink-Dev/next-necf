import React from 'react'
import CoresCard from './CoresCard'

function CoreList({ cores }: any) {
    return (
        <div>
            {
                cores.map((core: any) => (
                    <CoresCard
                        id={core.id}
                        key={core.id}
                        title={core.title}
                        link={core.link}
                        position={core.position}
                        image={core.image}
                    />
                ))
            }
        </div>
    )
}

export default CoreList