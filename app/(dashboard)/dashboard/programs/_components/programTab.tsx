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
import { Textarea } from "@/components/ui/textarea"
import Upload from "@/components/upload"

export function ProgramTab() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="program">Program</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="news">Newsletter</TabsTrigger>
            </TabsList>
            <TabsContent value="program">
                <Card>
                    <CardHeader>
                        <CardTitle>Program</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Upload />
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="slug">Slug</Label>
                            <Input id="slug" />
                        </div>
                        <Textarea placeholder="Description" />
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="gallery">
                <Card>
                    <CardHeader>
                        <CardTitle>Gallery</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Upload />
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="subtitle">Subtitle</Label>
                            <Input id="subtitle" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="news">
                <Card>
                    <CardHeader>
                        <CardTitle>Newsletter</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Upload />
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" />
                        </div>
                        <Textarea placeholder="Description" />
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
