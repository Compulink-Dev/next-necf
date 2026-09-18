import { CalendarDays, Images, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProgramsTab } from "./programsTabs";
import ProgramCard from "./programCard";
import GalleryList from "./galleryList";
import CreateButton from "@/components/createButton";

const tabMeta = [
  { value: "program", label: "Programmes", icon: CalendarDays },
  { value: "gallery", label: "Gallery", icon: Images },
  { value: "news", label: "Newsletter", icon: FileText },
];

export function ProgramTab() {
  return (
    <div className="rounded-3xl bg-background/70 p-4 ring-1 ring-border/60 backdrop-blur md:p-6">
      <Tabs defaultValue="program" orientation="vertical" className="flex w-full flex-col gap-6 lg:flex-row">
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
          <TabsContent value="program" className="mt-0">
            <Card className="rounded-2xl ring-border/60">
              <CardHeader>
                <CardTitle className="font-heading text-base text-emerald-800">
                  Programmes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ProgramCard />
                <div className="my-2 text-red-700">Help</div>
                <ProgramsTab />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="mt-0">
            <Card className="rounded-2xl ring-border/60">
              <CardHeader>
                <CardTitle className="font-heading text-base text-emerald-800">
                  Gallery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <CreateButton link="programs/gallery" />
                <GalleryList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="mt-0">
            <Card className="rounded-2xl ring-border/60">
              <CardHeader>
                <CardTitle className="font-heading text-base text-emerald-800">
                  Newsletter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="newsletter-title" className="text-xs font-medium text-muted-foreground">
                    Title
                  </Label>
                  <Input id="newsletter-title" placeholder="Newsletter title" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Description
                  </Label>
                  <Textarea placeholder="Newsletter description" />
                </div>
                <Upload />
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}