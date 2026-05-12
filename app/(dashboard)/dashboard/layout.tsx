export const dynamic = 'force-dynamic'
import React from 'react'
import DashboardShell from './_components/DashboardShell'
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { options } from "@/app/api/auth/[...nextauth]/options"

async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)
  if (!session) {
    redirect('/login')
  }

  return (
    <DashboardShell>
      {children}
    </DashboardShell>
  )
}

export default DashboardLayout
