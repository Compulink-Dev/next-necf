import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface AboutProps {
  id?: number
  image: string
}

const AboutImage = ({ image }: AboutProps) => {
  return (
    <div className=''>
      <Image
        width={300}
        height={300}
        className="h-auto max-w-full rounded-lg hover:opacity-70 cursor-pointer"
        src={image}
        alt=""
      />
    </div>
  )
}

export function AboutModal({ src, title }: { src: string, title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AboutImage image={src} />
      </DialogTrigger>
      <DialogContent className="w-full h-full max-w-none p-0 m-0 flex items-center justify-center bg-black bg-opacity-20">
        <div className="w-1/2 h-1/2 flex justify-center items-center">
          <Image
            src={src}
            alt={title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 50vw, 50vw"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full absolute bottom-10 text-center text-white">
          <p className="text-2xl font-semibold">{title}</p>
        </div>
        <DialogFooter className="absolute top-4 right-4">
          <DialogClose asChild>
            <button className="text-white p-2 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80"><X/></button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
