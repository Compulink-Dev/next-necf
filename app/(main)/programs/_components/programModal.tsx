import { Copy } from "lucide-react"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { ProgrammeCard } from "@/app/(main)/programs/_components/programmeCard"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface ProgramProps {
    id?: number,
    image: string,
    title?: string,
    subtitle?: string,
    description: string
}



export function ProgramModal({ id, image, title, subtitle, description }: ProgramProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <ProgrammeCard
                    key={id}
                    image={image}
                    title={`${title}`}
                    desc={description}
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <div className="flex flex-col w-full gap-2">
                    <div className="">
                        {title}
                    </div>
                    <Input placeholder="Enter company" />
                    <Input placeholder="Enter name" />
                    <Input placeholder="Enter email address" />
                    <div className="">
                        <Button className="bg-green-600 hover:bg-green-500 w-full">Register</Button>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
