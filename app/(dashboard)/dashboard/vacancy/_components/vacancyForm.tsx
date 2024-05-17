import { DatePicker } from '@/components/dateTimePicker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function VacancyForm() {
    return (
        <div>
            <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="jobType">Job Type</Label>
                <Input id="jobType" />
            </div>
            <div className="space-y-1 mt-4 flex gap-2 items-center">
                <Label htmlFor="date" className=''>Due date</Label>
                <DatePicker />
            </div>
            <Button className="bg-green-600 hover:bg-green-500 mt-8">Save changes</Button>
        </div>
    )
}

export default VacancyForm