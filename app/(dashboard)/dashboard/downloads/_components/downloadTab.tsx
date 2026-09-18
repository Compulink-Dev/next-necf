import { CloudDownload, FileText } from "lucide-react"
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
import { ReportTab } from "./reportTabs"
import DownloadList from "./downloadList"
import CreateButton from "@/components/createButton"

const tabMeta = [
    { value: "download", label: "Downloads", icon: CloudDownload },
    { value: "report", label: "Reports", icon: FileText },
]

export function DownloadTab({ currentPage = 1 }: { currentPage?: number }) {
    return (
        <div className="rounded-3xl bg-background/70 p-4 ring-1 ring-border/60 backdrop-blur md:p-6">
            <Tabs defaultValue="download" orientation="vertical" className="flex w-full flex-col gap-6 lg:flex-row">
                <div className="w-full shrink-0 lg:w-60 lg:self-start lg:sticky lg:top-20">
                    <TabsList className="flex h-auto w-full flex-row gap-1 rounded-2xl bg-emerald-600 p-1.5 text-white lg:flex-col">
                        {tabMeta.map(({ value, label, icon: Icon }) => (
                            <TabsTrigger
                                key={value}
                                value={value}
                                className="h-10 flex-1 justify-start gap-2.5 rounded-xl px-3 text-sm font-medium data-active:bg-white data-active:text-emerald-800"
                            >
                                <Icon className="size-4 shrink-0" />
                                {label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <div className="min-w-0 flex-1">
                    <TabsContent value="download" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Downloads</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CreateButton link='downloads' />
                                <DownloadList page={currentPage} />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="report" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Reports</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <ReportTab />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}