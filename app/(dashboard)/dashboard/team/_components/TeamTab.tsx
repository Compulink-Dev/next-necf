import CreateButton from "@/components/createButton"
import {
    Card,
    CardContent,
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
import { Heading, Armchair, Users, Building2 } from "lucide-react"
import ChairsList from "./ChairsList"
import CoreList from "./CoreList"
import TeamList from "./TeamList"

const tabMeta = [
    { value: "title", label: "Title", icon: Heading },
    { value: "chairperson", label: "Chairperson", icon: Armchair },
    { value: "steering", label: "Steering", icon: Users },
    { value: "secretary", label: "Secretariat", icon: Building2 },
]

export async function TeamTab() {
    return (
        <div className="rounded-3xl bg-background/70 p-4 ring-1 ring-border/60 backdrop-blur md:p-6">
            <Tabs defaultValue="title" orientation="vertical" className="flex w-full flex-col gap-6 lg:flex-row">
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
                    <TabsContent value="title" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Title</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="title" className="text-xs font-medium text-muted-foreground">Title</Label>
                                    <Input id="title" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="subtitle" className="text-xs font-medium text-muted-foreground">Subtitle</Label>
                                    <Input id="subtitle" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="chairperson" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Chairperson</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="pb-4 flex justify-end">
                                    <CreateButton link={'team/chair'} />
                                </div>
                                <ChairsList />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="steering" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Steering</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="pb-4 flex justify-end">
                                    <CreateButton link={'team/core'} />
                                </div>
                                <CoreList />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="secretary" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Secretariat</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="pb-4 flex justify-end">
                                    <CreateButton link={'team'} />
                                </div>
                                <TeamList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}