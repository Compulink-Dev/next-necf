import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ResearchList from "./researchList"
import TaskList from "./taskList"
import ConferenceList from "./conferenceList"
import PresentList from "./presesntList"
import PolicyList from "./policyList"
import MonthList from "./monthlyList copy 2"
import QuarterList from "./quartetList"
import CreateButton from "@/components/createButton"

const reportTabs = [
    { value: "research", label: "Research Reports" },
    { value: "task", label: "Task Force Reports" },
    { value: "conference", label: "Conference Reports" },
    { value: "policy", label: "Policy Analysis Reports" },
]

export function ReportTab() {
    return (
        <Tabs defaultValue="research" className="w-full">
            <TabsList className="flex w-full flex-wrap gap-1 rounded-2xl bg-emerald-600 p-1 text-white">
                {reportTabs.map((tab) => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="h-9 flex-1 rounded-xl gap-1.5 text-xs font-medium data-active:bg-white data-active:text-emerald-800"
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>

            <TabsContent value="research" className="mt-4">
                <Card className="rounded-2xl ring-border/60">
                    <CardHeader>
                        <CardTitle className="font-heading text-base text-emerald-800">Research Report</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateButton link='downloads/research' />
                        <ResearchList />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="task" className="mt-4">
                <Card className="rounded-2xl ring-border/60">
                    <CardHeader>
                        <CardTitle className="font-heading text-base text-emerald-800">Task Force Report</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateButton link='downloads/task' />
                        <TaskList />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="conference" className="mt-4">
                <Card className="rounded-2xl ring-border/60">
                    <CardHeader>
                        <CardTitle className="font-heading text-base text-emerald-800">Conference</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateButton link='downloads/conference' />
                        <ConferenceList />
                    </CardContent>
                    <div className="px-4 pb-4">
                        <Tabs defaultValue="presentation" className="w-full">
                            <TabsList className="flex w-full gap-1 rounded-2xl bg-emerald-600 p-1 text-white">
                                <TabsTrigger
                                    value="presentation"
                                    className="h-9 flex-1 rounded-xl gap-1.5 text-xs font-medium data-active:bg-white data-active:text-emerald-800"
                                >
                                    Conference Presentation
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="presentation" className="mt-4">
                                <Card className="rounded-2xl ring-border/60">
                                    <CardHeader>
                                        <CardTitle className="font-heading text-base text-emerald-800">Conference Presentation</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <CreateButton link='downloads/presentation' />
                                        <PresentList />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="policy" className="mt-4">
                <Card className="rounded-2xl ring-border/60">
                    <CardHeader>
                        <CardTitle className="font-heading text-base text-emerald-800">Policy Analysis Reports</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateButton link='downloads/policy' />
                        <PolicyList />
                    </CardContent>
                    <div className="px-4 pb-4">
                        <Tabs defaultValue="monthly" className="w-full">
                            <TabsList className="flex w-full flex-wrap gap-1 rounded-2xl bg-emerald-600 p-1 text-white">
                                <TabsTrigger
                                    value="monthly"
                                    className="h-9 flex-1 rounded-xl gap-1.5 text-xs font-medium data-active:bg-white data-active:text-emerald-800"
                                >
                                    Monthly Bulletins
                                </TabsTrigger>
                                <TabsTrigger
                                    value="quarterly"
                                    className="h-9 flex-1 rounded-xl gap-1.5 text-xs font-medium data-active:bg-white data-active:text-emerald-800"
                                >
                                    Quarterly Environmental Analysis Report
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="monthly" className="mt-4">
                                <Card className="rounded-2xl ring-border/60">
                                    <CardHeader>
                                        <CardTitle className="font-heading text-base text-emerald-800">Monthly Bulletin</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <CreateButton link='downloads/monthly' />
                                        <MonthList />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="quarterly" className="mt-4">
                                <Card className="rounded-2xl ring-border/60">
                                    <CardHeader>
                                        <CardTitle className="font-heading text-base text-emerald-800">Quarterly Environmental Analysis Report</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <CreateButton link='downloads/quarterly' />
                                        <QuarterList />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    )
}