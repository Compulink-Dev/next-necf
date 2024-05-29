import CreateButton from "@/components/createButton"
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
import ChairsList from "./ChairsList"
import getChairs from "@/lib/team/getChairs"

export async function TeamTab() {

    const chairs = await getChairs()

    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="title">Title</TabsTrigger>
                <TabsTrigger value="chairperson">Chairperson</TabsTrigger>
                <TabsTrigger value="steering">Steering</TabsTrigger>
                <TabsTrigger value="secretary">Secretariat</TabsTrigger>
            </TabsList>
            <TabsContent value="title">
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
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
                        <Button className="bg-green-600 hover:bg-green-500">Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="chairperson">
                <Card>
                    <CardHeader>
                        <CardTitle>Chairperson</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="pb-4 flex justify-end">
                            <CreateButton />
                        </div>
                        <ChairsList chairs={chairs} />
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="steering">
                <Card>
                    <CardHeader>
                        <CardTitle>Steering</CardTitle>
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
                            <Label htmlFor="position">Position</Label>
                            <Input id="position" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="link1">Facebook Link</Label>
                            <Input id="link1" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="secretary">
                <Card>
                    <CardHeader>
                        <CardTitle>Secretary</CardTitle>
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
                            <Label htmlFor="position">Position</Label>
                            <Input id="position" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="link1">Facebook Link</Label>
                            <Input id="link1" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
