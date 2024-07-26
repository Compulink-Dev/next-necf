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
import ProgrammeList from "./prograameList"
import TaskForces from "./taskforce"
import AdhocList from "./adhoclist"
import AnnualList from "./anuual"
import Gallery from "./gallery"




export function ProgramTab() {
    return (
        <Tabs defaultValue="account" className="w-full px-8 py-4">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="program">Programmes</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="news">Newsletter</TabsTrigger>
            </TabsList>
            <TabsContent value="program">
                <Card>
                    <CardContent className="space-y-4">
                        <div className="mx-8">
                            <div className="mt-12">
                                <p className="my-2 font-bold text-2xl text-green-600">Annual Programmes</p>
                                <AnnualList />
                            </div>
                            <div className="mt-12">
                                <p className="my-2 font-bold text-2xl text-green-600">Task Forces</p>
                                <TaskForces />
                            </div>
                            <div className="mt-12">
                                <p className="my-2 font-bold text-2xl text-green-600">Adhoc Programmes</p>
                                <AdhocList />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="gallery">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-700">Gallery</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="mx-8">
                            <Gallery />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="news">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-700">Newsletter</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="mx-8">Newsletter</div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
