"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MessageSquare, Bell, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MessagesMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <MessageSquare className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-90" align="end" forceMount>
        <DropdownMenuLabel>Mesajlar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Tabs defaultValue="messages" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="messages">Mesajlarım</TabsTrigger>
            <TabsTrigger value="notifications">Bilgilendirmeler</TabsTrigger>
            <TabsTrigger value="offers">Takas Tekliflerim</TabsTrigger>
          </TabsList>
          <TabsContent value="messages" className="mt-2">
            <div className="space-y-2">
              <DropdownMenuItem asChild>
                <Link href="/mesajlar" className="flex items-center">
                  <span>Yeni mesajınız var</span>
                </Link>
              </DropdownMenuItem>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-2">
            <div className="space-y-2">
              <DropdownMenuItem asChild>
                <Link href="/bildirimler" className="flex items-center">
                  <span>Yeni bildiriminiz var</span>
                </Link>
              </DropdownMenuItem>
            </div>
          </TabsContent>
          <TabsContent value="offers" className="mt-2">
            <div className="space-y-2">
              <DropdownMenuItem asChild>
                <Link href="/teklifler" className="flex items-center">
                  <span>Yeni teklifiniz var</span>
                </Link>
              </DropdownMenuItem>
            </div>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 