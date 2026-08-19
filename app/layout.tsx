export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import "./globals.css";
import "@uploadthing/react/styles.css";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "sonner"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

export const metadata: Metadata = {
  title: "NECF",
  description: "NECF",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans">
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <SessionWrapper>{children}</SessionWrapper>
        <Toaster />
      </body>
    </html>
  );
}
