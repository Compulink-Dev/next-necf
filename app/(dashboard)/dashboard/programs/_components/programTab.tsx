import { DatePicker } from "@/components/dateTimePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/upload";
import { ProgramsTab } from "./programsTabs";
import ProgramCard from "./programCard";
import GalleryList from "./galleryList";
import CreateButton from "@/components/createButton";

export function ProgramTab() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex gap-2 bg-green-600 text-white">
        <TabsTrigger value="program">Programmes</TabsTrigger>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="news">Newsletter</TabsTrigger>
      </TabsList>
      <TabsContent value="program">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">Programmes</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ProgramCard />
            <div className="my-2 text-red-700">Help</div>
            <ProgramsTab />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="gallery">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">Gallery</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CreateButton link="programs/gallery" />
            <GalleryList />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="news">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">Newsletter</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Upload />
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input id="title" />
            </div>
            <Textarea placeholder="Description" />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
