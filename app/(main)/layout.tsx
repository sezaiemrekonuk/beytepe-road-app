import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MainNav />
      <div className="fixed top-4 right-4 z-50">
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
} 