import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function ContactForm() {
    return (
        <div className='p-8'>
            <div className="space-y-1">
                <Label htmlFor="name">Contact</Label>
                <Input id="name" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="address">Address</Label>
                <Input id="address" />
            </div>
            <Button className="bg-green-600 hover:bg-green-500 mt-4">Save changes</Button>
        </div>
    )
}

export default ContactForm