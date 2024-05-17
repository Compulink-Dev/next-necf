import { DatePicker } from "@/components/dateTimePicker"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Upload from "@/components/upload"

export function DownloadTab() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="download">Downloads</TabsTrigger>
                <TabsTrigger value="report">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="download">
                <Card>
                    <CardHeader>
                        <CardTitle>Downloads</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Upload />
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Upload Document</Label>
                            <Input id="picture" type="file" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" />
                        </div>
                        <DatePicker />
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="report">
                <Card>
                    <CardHeader>
                        <CardTitle>Reports</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Upload />
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Upload Document</Label>
                            <Input id="picture" type="file" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" />
                        </div>
                        <DatePicker />
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
