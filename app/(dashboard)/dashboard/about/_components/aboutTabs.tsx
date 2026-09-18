import { Layers, LayoutTemplate, Info, Images } from "lucide-react"
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
import TopList from "./topList"
import AboutList from "./aboutList"
import SecondList from "./secondList"
import GalleryList from "./galleryList"
import CreateButton from "@/components/createButton"

const tabMeta = [
    { value: "top", label: "Top", icon: Layers },
    { value: "main", label: "Main", icon: LayoutTemplate },
    { value: "about", label: "About", icon: Info },
    { value: "gallery", label: "Gallery", icon: Images },
]

export function AboutTab() {
    return (
        <div className="rounded-3xl bg-background/70 p-4 ring-1 ring-border/60 backdrop-blur md:p-6">
            <Tabs defaultValue="top" orientation="vertical" className="flex w-full flex-col gap-6 lg:flex-row">
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
                    <TabsContent value="top" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Top</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <TopList />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="main" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Main</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <SecondList />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="about" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">About</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <AboutList />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="gallery" className="mt-0">
                        <Card className="rounded-2xl ring-border/60">
                            <CardHeader>
                                <CardTitle className="font-heading text-base text-emerald-800">Gallery</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CreateButton link='about/gallery' />
                                <GalleryList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}