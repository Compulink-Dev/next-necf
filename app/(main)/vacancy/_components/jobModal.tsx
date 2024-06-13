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

export function JobModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-green-700 hover:bg-green-400">Apply</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Send Application</DialogTitle>
                    <DialogDescription>
                        Upload your CV and send to apply
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Upload
                        </Label>
                        <Input
                            id="file"
                            type="file"
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <Button className="bg-green-600 hover:bg-green-500">Send Application</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
