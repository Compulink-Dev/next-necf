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
import Image from "next/image"
import { ProgrammeCard } from "@/app/(main)/programs/_components/programmeCard"

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
        <div className="flex w-full items-center space-x-2">
          <Image src={image} alt="" width={500} height={500} className="w-full" />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
