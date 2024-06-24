import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface Cards {
    title: string
    desc: string
    image: string
}

type CardProps = React.ComponentProps<typeof Card>

export function ProgrammeCard({ title, image, desc }: Cards) {
    return (
        <Card className={cn("w-full md:w-[380px]")} >
            <CardHeader>
                <CardTitle className="text-green-600">{title}</CardTitle>
                <CardDescription>Register now to join</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">

                    <div className="flex-1 space-y-1">
                        <img src={image} alt="" width={100} height={100} className="w-full object-contain" />
                    </div>
                </div>
                <div>
                    <p className="text-xs text-slate-700">
                        {desc}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-500">
                    <Check className="mr-2 h-4 w-4" />Register now
                </Button>
            </CardFooter>
        </Card>
    )
}
