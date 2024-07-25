import React from 'react'

function DashCard({ title, value, subtitle, recent }: any) {
    return (
        <div className='border rounded p-4 h-48'>
            <p className="font-bold">{title}</p>
            <div className="mt-4">
                <div className="flex items-center gap-1">
                    <div className="h-14 w-14 rounded font-bold text-lg flex items-center justify-center bg-green-600 text-white">
                        <div className="">{value}</div>
                    </div>
                    <p className="">{subtitle}</p>
                </div>
                <div className="mt-4">
                    <div className="">
                        <p className="text-sm text-slate-400">{recent}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashCard