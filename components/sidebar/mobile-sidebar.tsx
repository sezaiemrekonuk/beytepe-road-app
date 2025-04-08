"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { MainSidebar } from "./main-sidebar"

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80vh]">
        <div className="p-4">
          <MainSidebar />
        </div>
      </DrawerContent>
    </Drawer>
  )
} 