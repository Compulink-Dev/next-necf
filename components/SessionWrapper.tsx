"use client";
import React from "react";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider

function SessionWrapper({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionWrapper;
