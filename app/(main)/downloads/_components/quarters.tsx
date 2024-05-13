import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function Quarters() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full flex bg-green-500 text-white ">
                <TabsTrigger value="research">Research Reports</TabsTrigger>
                <TabsTrigger value="task">Task Force Reports</TabsTrigger>
                <TabsTrigger value="conference">Conference Reports</TabsTrigger>
                <TabsTrigger value="policy">Policy Analysis Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="research">
                <Card>
                    <CardHeader>
                        <CardTitle></CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">

                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="task">
                <Card>
                    <CardHeader>
                        <CardTitle></CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">

                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="conference">
                <Card>
                    <CardHeader>
                        <CardTitle>Conference</CardTitle>
                        <CardDescription>
                            Conference & Presentations
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">

                    </CardContent>
                    <CardFooter>
                        <Tabs className="w-full">
                            <TabsList className="flex bg-green-100">
                                <TabsTrigger value="presentation">Conference Presentation</TabsTrigger>
                            </TabsList>
                            <TabsContent value="presentation">
                                <Card>
                                    <CardHeader>
                                        <CardTitle></CardTitle>
                                        <CardDescription>

                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">

                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save password</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="policy">
                <Card>
                    <CardHeader>
                        <CardTitle></CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">

                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
