'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  User,
  ListChecks,
  Clock,
  History,
  Heart,
  Star,
  Settings,
  Shield,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Ana Sayfa",
    href: "/profil",
    icon: User,
  },
  {
    title: "Aktif İlanlar",
    href: "/profil/aktif-ilanlar",
    icon: ListChecks,
  },
  {
    title: "Süresi Dolan İlanlar",
    href: "/profil/suresi-dolan-ilanlar",
    icon: Clock,
  },
  {
    title: "Son İşlemler",
    href: "/profil/son-islemler",
    icon: History,
  },
  {
    title: "Favori Satıcılar",
    href: "/profil/favori-satıcılar",
    icon: Heart,
  },
  {
    title: "Favori İlanlar",
    href: "/profil/favori-ilanlar",
    icon: Star,
  },
  {
    title: "Güvenlik",
    href: "/profil/guvenlik",
    icon: Shield,
  },
  {
    title: "Ayarlar",
    href: "/profil/ayarlar",
    icon: Settings,
  },
]

export function ProfileSidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Profil
        </h2>
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 