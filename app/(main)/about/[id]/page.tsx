import React from 'react'

function Gallery({ params }: any) {
    const { id } = params
    console.log("Id :", id);

    return (
        <div>Gallery</div>
    )
}

export default Gallery