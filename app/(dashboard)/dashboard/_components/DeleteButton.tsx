'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'



async function handleDelete({ buttonId, router }: any) {

    try {

        const res = await fetch(`/api/downloads/${buttonId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (res.ok) {
            toast.success("Download deleted successfully")
            return data
            router.push('/dashboard/downloads')
        } else {
            toast.error('Download delete was not successful')
        }
    } catch (error) {
        console.log(error);

    }
}

function DeleteButton({ id }: any) {
    const router = useRouter()
    return (
        <Button
            onClick={() => handleDelete(id)}
            className='bg-red-700 hover:bg-red-500'>
            Delete
        </Button>
    )
}

export default DeleteButton