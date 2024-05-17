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

export function AboutTab() {
    return (
        <Tabs defaultValue="account" className="w-full ">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="top">Top</TabsTrigger>
                <TabsTrigger value="main">Main</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="top">
                <Card>
                    <CardHeader>
                        <CardTitle>Top</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" className="outline-green-600" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="main">
                <Card>
                    <CardHeader>
                        <CardTitle>Main</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Upload />
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" className="outline-green-600" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="about">
                <Card>
                    <CardHeader>
                        <CardTitle>About</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Upload />
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" className="outline-green-600" />
                        </div>
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
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
