'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

function EditEvent({ event }: { event: any }) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: event.title,
            date: event.date,
            image: undefined,
            document: undefined
        }
    })

    async function handleDelete() {
        try {
            setLoading(true)
            const res = await fetch(`/api/main-events/${event._id}`, {
                method: 'DELETE'
            })

            if (res.ok) {
                toast.success("Event deleted successfully")
                router.push('/dashboard/home')
            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error(error)
            toast.error("Failed to delete event")
        } finally {
            setLoading(false)
        }
    }

    async function uploadImageToCloudinary(file: File) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'next_necf')

        const response = await fetch("https://api.cloudinary.com/v1_1/dxkna0tuc/image/upload/", {
            method: "POST",
            body: formData
        })

        if (!response.ok) {
            throw new Error('Image upload failed')
        }
        return await response.json()
    }

    async function uploadDocumentToServer(file: File) {
        const formData = new FormData()
        formData.append('document', file)

        const response = await fetch('/api/upload-document', {
            method: 'POST',
            body: formData
        })

        if (!response.ok) {
            throw new Error('Document upload failed')
        }
        return await response.json()
    }

    async function onSubmit(data: any) {
        setLoading(true)
        try {
            let imageUrl = event.image
            let documentUrl = event.document

            // Handle image upload if new image provided
            if (data.image?.length > 0) {
                const imageData = await uploadImageToCloudinary(data.image[0])
                imageUrl = imageData.secure_url
            }

            // Handle document upload if new document provided
            if (data.document?.length > 0) {
                const documentData = await uploadDocumentToServer(data.document[0])
                documentUrl = documentData.url
            }

            // Update event data
            const response = await fetch(`/api/main-events/${event._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: data.title,
                    date: data.date,
                    image: imageUrl,
                    document: documentUrl
                })
            })

            if (!response.ok) {
                throw new Error(await response.text())
            }

            toast.success('Event updated successfully')
            router.push('/dashboard/home')
        } catch (error) {
            console.error(error)
            toast.error(error instanceof Error ? error.message : 'Failed to update event')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="mb-6">
                    <Label className="text-slate-600">Title</Label>
                    <Input
                        {...register("title", { required: "Title is required" })}
                        type="text"
                        id="title"
                        placeholder="Enter title"
                    />
                    {errors.title && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.title.message?.toString()}
                        </p>
                    )}
                </div>
                
                <div className="mb-6">
                    <Label className="text-slate-600">Date</Label>
                    <Input
                        {...register("date", { required: "Date is required" })}
                        type="text"
                        id="date"
                        placeholder="Enter date"
                    />
                    {errors.date && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.date.message?.toString()}
                        </p>
                    )}
                </div>

                <div className="mb-6 flex items-center gap-4">
                    <Image
                        src={event.image}
                        alt="Event image"
                        width={100}
                        height={100}
                        className="rounded-full object-cover h-32 w-32"
                    />
                    <div className="flex-1">
                        <Label className="text-slate-600">Image</Label>
                        <Input 
                            {...register("image")} 
                            type="file" 
                            accept="image/*"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <Label className="text-slate-600">Document</Label>
                    <Input 
                        {...register("document")} 
                        type="file" 
                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                    />
                    {event.document && (
                        <p className="text-sm text-blue-600 mt-2">
                            <a 
                                href={event.document} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                View Current Document
                            </a>
                        </p>
                    )}
                </div>

                <div className="flex gap-4">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-500"
                    >
                        {loading ? "Saving..." : "Save changes"}
                    </Button>
                    
                    <Button
                        type="button"
                        onClick={handleDelete}
                        disabled={loading}
                        className="bg-red-700 hover:bg-red-500"
                    >
                        Delete
                    </Button>
                </div>
            </form>
            
            <Toaster position="top-right" />
        </div>
    )
}

export default EditEvent