"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Flame, Clock } from "lucide-react"
import slugify from "slugify"

const categories = [
  {
    title: "Elektronik",
    items: ["Telefonlar", "Bilgisayarlar", "Tabletler", "Aksesuarlar"],
  },
  {
    title: "Kitaplar ve Eğitim",
    items: ["Ders Kitapları", "Romanlar", "Sınav Kaynakları", "Kırtasiye"],
  },
  {
    title: "Spor ve Hobi",
    items: ["Spor Ekipmanları", "Müzik Aletleri", "Oyun Konsolları", "Koleksiyon"],
  },
  {
    title: "Ev Eşyaları",
    items: ["Mobilya", "Küçük Ev Aletleri", "Mutfak Gereçleri", "Dekorasyon"],
  },
  {
    title: "Giyim ve Aksesuar",
    items: ["Kıyafetler", "Ayakkabılar", "Çantalar", "Takılar"],
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MainSidebar({ className, ...props }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Hızlı Erişim</CardTitle>
                <CardDescription>
                  Acil ve yeni eklenen takas ilanları
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/acil">
                    <Flame className="mr-2 h-4 w-4 text-red-500" />
                    Acil Takaslar
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/yeniler">
                    <Clock className="mr-2 h-4 w-4 text-blue-500" />
                    Yeni İlanlar
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Kategoriler
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1">
              {categories.map((category) => (
                <div key={category.title} className="py-2">
                  <h3 className="mb-2 px-4 text-sm font-medium text-muted-foreground">
                    {category.title}
                  </h3>
                  {category.items.map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className="w-full justify-start font-normal"
                      asChild
                    >
                      <Link href={`/kategori/${slugify(item, { lower: true })}`}>
                        {item}
                      </Link>
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}