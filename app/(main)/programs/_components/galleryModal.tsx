import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GalleryCard from "./galleryCard"
import Image from "next/image"


interface GalleryProps {
    id: number,
    imageUrl: string,
    title: string,
    desc: string
}


export function GalleryModal({ id, imageUrl, title, desc }: GalleryProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <GalleryCard
                    key={id}
                    imageUrl={imageUrl}
                    title={title}
                    description={desc}
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full h-full">
                    <Image src={imageUrl} alt="" width={500} height={500} className="w-full h-full" />
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
