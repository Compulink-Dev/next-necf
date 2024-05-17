'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'

function Upload() {

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data: any) => {
        const image = data.profile[0]

        const formData = new FormData()

        formData.append('file', image)

        formData.append('upload_preset', "Compulink")

        const uploadResponse = await fetch(
            "https://api.cloudinary.com/v1_1/Compulink/image/upload", {
            method: "POST",
            body: formData
        }
        )

        const uploadedImageData = await uploadResponse.json()
    }

    return (
        <form className="mx-16" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Upload Picture</Label>
                <Input id="picture" type="file" />
            </div>
            <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
            >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>

            <Button
                type="submit"
                className="bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
            >
                Upload to Cloud
            </Button>
        </form>
    )
}

export default Upload