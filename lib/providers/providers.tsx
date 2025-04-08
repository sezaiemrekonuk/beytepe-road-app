"use client"

import { SessionProvider } from "next-auth/react"
import { AuthProvider } from "@/lib/providers/auth-provider"
import { ThemeProvider } from "@/lib/providers/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  )
} 