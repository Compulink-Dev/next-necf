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
import DownloadCard from "./downloadCard"
import { connectToDB } from "@/lib/connectToDB"
import Research from "@/models/(downloads)/research"
import task from "@/models/(downloads)/task"
import Conference from "@/models/(downloads)/conference"
import Policy from "@/models/(downloads)/policy"
import Presentation from "@/models/(downloads)/presentation"
import Monthly from "@/models/(downloads)/monthly"
import Quarterly from "@/models/(downloads)/quarterly"


async function getResearches() {
    await connectToDB()
    const researches = await Research.find()
    return researches;
}

async function getTaskForces() {
    await connectToDB()
    const tasks = await task.find()
    return tasks;
}

async function getConferences() {
    await connectToDB()
    const conferences = await Conference.find()
    return conferences;
}
async function getPolicy() {
    await connectToDB()
    const policies = await Policy.find()
    return policies;
}

async function getPresentations() {
    await connectToDB()
    const presentations = await Presentation.find()
    return presentations;
}

async function getMonthly() {
    await connectToDB()
    const months = await Monthly.find()
    return months;
}

async function getQuarter() {
    await connectToDB()
    const quarters = await Quarterly.find()
    return quarters;
}

export async function Quarters() {

    const tasks = await getTaskForces()
    const researches = await getResearches()
    const conferences = await getConferences()
    const policies = await getPolicy()
    const presentations = await getPresentations()
    const months = await getMonthly()
    const quarters = await getQuarter()


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
                        <CardTitle className="text-green-600">Research Report</CardTitle>
                        <CardDescription>
                            Research report
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
                        {
                            researches.map((research: any) => (
                                <DownloadCard
                                    key={research.document}
                                    title={research.title}
                                    date={research.date}
                                    document={research.document}
                                />
                            ))
                        }
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="task">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600">Task Force Report</CardTitle>
                        <CardDescription>
                            Task Force Report
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
                        {
                            tasks.map((task: any) => (
                                <DownloadCard
                                    title={task.title}
                                    date={task.date}
                                    document={task.document}
                                    key={task.document}
                                />
                            ))
                        }
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="conference">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600">Conference</CardTitle>
                        <CardDescription>
                            Conference & Presentations
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
                        {
                            conferences.map((research: any) => (
                                <DownloadCard
                                    title={research.title}
                                    date={research.date}
                                    document={research.document}
                                    key={research.document}
                                />
                            ))
                        }
                    </CardContent>
                    <CardFooter>
                        <Tabs className="w-full">
                            <TabsList className="flex bg-green-600 text-white">
                                <TabsTrigger value="presentation">Conference Presentation</TabsTrigger>
                            </TabsList>
                            <TabsContent value="presentation">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-green-600">Conference Presentation</CardTitle>
                                        <CardDescription>
                                            Conference Presentation
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
                                        {
                                            presentations.map((research: any) => (
                                                <DownloadCard
                                                    title={research.title}
                                                    date={research.date}
                                                    document={research.document}
                                                    key={research.document}
                                                />
                                            ))
                                        }
                                    </CardContent>
                                    <CardFooter>
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
                        <CardTitle className="text-green-600">Policy Analysis Reports</CardTitle>
                        <CardDescription>
                            Policy Analysis Reports
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
                        {
                            policies.map((research: any) => (
                                <DownloadCard
                                    title={research.title}
                                    date={research.date}
                                    document={research.document}
                                    key={research.document}
                                />
                            ))
                        }
                    </CardContent>
                    <CardFooter>
                        <Tabs className="w-full">
                            <TabsList className="flex bg-green-500 text-white">
                                <TabsTrigger value="monthly">Monthly Bulletins</TabsTrigger>
                                <TabsTrigger value="quarterly">Quarterly Environmental Analysis Report</TabsTrigger>
                            </TabsList>
                            <TabsContent value="monthly">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-green-600">Monthly Bulletin</CardTitle>
                                        <CardDescription>
                                            Monthly Bulletin
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
                                        {
                                            months.map((research: any) => (
                                                <DownloadCard
                                                    title={research.title}
                                                    date={research.date}
                                                    document={research.document}
                                                    key={research.document}
                                                />
                                            ))
                                        }
                                    </CardContent>
                                    <CardFooter>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="quarterly">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-green-600">Quarterly Environmental Analysis Report</CardTitle>
                                        <CardDescription>
                                            Quarterly Environmental Analysis Report
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
                                        {
                                            quarters.map((research: any) => (
                                                <DownloadCard
                                                    title={research.title}
                                                    date={research.date}
                                                    document={research.document}
                                                    key={research.document}
                                                />
                                            ))
                                        }
                                    </CardContent>
                                    <CardFooter>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
