import React from 'react'
import { ProgramTab } from './_components/programTab'

function Programs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50/40 via-white to-gray-50">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                        Programmes Management
                    </h1>
                    <p className="text-emerald-600/70 mt-2">
                        Manage programmes, gallery images and newsletters from one place
                    </p>
                </div>
                <ProgramTab />
            </div>
        </div>
    )
}

export default Programs