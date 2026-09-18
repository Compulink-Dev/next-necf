import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import Gallery from '@/models/(programs)/gallery'
import { PaginatedImageGrid, type GridItem } from '@/components/gallery/paginatedGrid'

type GalleryDoc = {
    id?: string
    _id?: unknown
    title?: string
    image?: string
    description?: string
}

export async function loadAbout(): Promise<GridItem[]> {
    await connectToDB()
    const abouts = await Gallery.find()
    return abouts.map((g: GalleryDoc) => ({
        id: String(g.id ?? g._id),
        title: g.title ?? "",
        image: g.image ?? "",
        description: g.description ?? "",
    }))
}

async function GalleryList() {
    const abouts = await loadAbout()
    return (
        <PaginatedImageGrid
            items={abouts}
            basePath="/dashboard/programs/gallery"
        />
    )
}

export default GalleryList