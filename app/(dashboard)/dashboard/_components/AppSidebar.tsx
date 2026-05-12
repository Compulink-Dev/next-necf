"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  Home,
  Info,
  CloudDownload,
  CalendarDays,
  Users,
  Mail,
  UserPlus,
  Footprints,
} from "lucide-react"

const contentItems = [
  { title: "Home", path: "/dashboard/home", icon: Home },
  { title: "About", path: "/dashboard/about", icon: Info },
  { title: "Downloads", path: "/dashboard/downloads", icon: CloudDownload },
  { title: "Programmes", path: "/dashboard/programs", icon: CalendarDays },
  { title: "Team", path: "/dashboard/team", icon: Users },
  { title: "Contact", path: "/dashboard/contact", icon: Mail },
]

const managementItems = [
  { title: "Delegates", path: "/dashboard/delegates", icon: Users },
  { title: "Vacancies", path: "/dashboard/vacancy", icon: UserPlus },
  { title: "Footer", path: "/dashboard/footer", icon: Footprints },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2">
          <Image
            src="/logon.png"
            alt="NECF"
            width={36}
            height={36}
            className="size-9 rounded-xl bg-white/90 object-contain p-1"
          />
          <div className="leading-tight group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold tracking-wide">NECF</p>
            <p className="text-[11px] text-muted-foreground">Admin Console</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => {
                const Icon = item.icon
                const isActive =
                  pathname === item.path || pathname.startsWith(item.path + "/")
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link href={item.path}>
                        <Icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => {
                const Icon = item.icon
                const isActive =
                  pathname === item.path || pathname.startsWith(item.path + "/")
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link href={item.path}>
                        <Icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="View live site">
              <Link href="/">
                <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
                <span>View live site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
