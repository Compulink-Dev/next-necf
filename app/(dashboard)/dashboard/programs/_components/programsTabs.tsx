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
import TaskList from "./TaskList"
import AnnualList from "./annualList"
import AdhocList from "./adhocList"
import CreateButton from "@/components/createButton"

export function ProgramsTab() {
    return (
        <Tabs defaultValue="taskforce" className="w-full">
            <TabsList className="flex w-full gap-1 rounded-2xl bg-emerald-600 p-1 text-white">
                <TabsTrigger
                    value="taskforce"
                    className="h-9 flex-1 rounded-xl gap-1.5 text-xs font-medium data-active:bg-white data-active:text-emerald-800"
                >
                    Task Force
                </TabsTrigger>
                <TabsTrigger
                    value="annual"
                    className="h-9 flex-1 rounded-xl gap-1.5 text-xs font-medium data-active:bg-white data-active:text-emerald-800"
                >
                    Annual
                </TabsTrigger>
                <TabsTrigger
                    value="adhoc"
                    className="h-9 flex-1 rounded-xl gap-1.5 text-xs font-medium data-active:bg-white data-active:text-emerald-800"
                >
                    Ad Hoc
                </TabsTrigger>
            </TabsList>
            <TabsContent value="taskforce" className="mt-4">
                <Card className="rounded-2xl ring-border/60">
                    <CardHeader>
                        <CardTitle className="font-heading text-base text-emerald-800">Task Force</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateButton link='programs/taskforce' />
                        <TaskList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="annual" className="mt-4">
                <Card className="rounded-2xl ring-border/60">
                    <CardHeader>
                        <CardTitle className="font-heading text-base text-emerald-800">Annual</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateButton link='programs/annual' />
                        <AnnualList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="adhoc" className="mt-4">
                <Card className="rounded-2xl ring-border/60">
                    <CardHeader>
                        <CardTitle className="font-heading text-base text-emerald-800">Ad Hoc</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateButton link='programs/adhoc' />
                        <AdhocList />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}