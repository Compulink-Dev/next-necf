import type { Metadata } from "next";
import "./globals.css";
import EventEmitter from "events";


export const metadata: Metadata = {
  title: "NECF",
  description: "NECF",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const emitter = new EventEmitter()
  emitter.setMaxListeners(20)

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
