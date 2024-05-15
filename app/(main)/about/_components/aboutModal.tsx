import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface AboutProps {
    id?: number,
    imageUrl: string
}

const AboutImage = ({ id, imageUrl }: AboutProps) => {
    return (
        <div className=''>
            <Image width={300} height={300} className="h-auto max-w-full rounded-lg hover:opacity-70 cursor-pointer" src={imageUrl} alt="" />
        </div>
    )
}

export function AboutModal({ src }: { src: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <AboutImage imageUrl={src} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <div className="flex w-full items-center space-x-2">
                    <Image src={src} alt="" width={500} height={500} className="w-full" />
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
