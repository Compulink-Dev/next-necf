// import ImageUpload from "@/components/ImageUpload"
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
import EventCard from "./EventCard";
import HeroList from "./HeroList";
import CreateButton from "@/components/createButton";
import MainList from "./MainList";
import ServiceList from "./ServiceList ";
import MilestoneList from "./MilestoneList";
import TestimonialList from "./TestimonialList ";

export function HomeTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex items-center justify-center mb-8 bg-green-600 text-white">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="main">Main</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="milestone">Milestone</TabsTrigger>
        <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
      </TabsList>
      <TabsContent value="hero">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <CreateButton link='home/hero' /> */}
            <HeroList />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="main">
        <Card>
          <CardHeader>
            <CardTitle>Main</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <CreateButton link='home/main' /> */}
            <MainList />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="services">
        <Card>
          <CardHeader>
            <CardTitle>Service</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <CreateButton link='home/service' /> */}
            <ServiceList />
          </CardContent>

        </Card>
      </TabsContent>
      <TabsContent value="events">
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CreateButton link='home/event' />
            <EventCard />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="milestone">
        <Card>
          <CardHeader>
            <CardTitle>Milestone</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <MilestoneList />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="testimonial">
        <Card>
          <CardHeader>
            <CardTitle>Testimonial</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CreateButton link='home/testimonials' />
            <TestimonialList />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
