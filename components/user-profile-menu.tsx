"use client"

import * as React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { User, LogOut, Package, Heart, ShoppingCart, Handshake, Settings } from "lucide-react"
import { useAuth } from "@/lib/providers/auth-provider"
import { User as FirebaseUser } from "firebase/auth"

export function UserProfileMenu() {
  const { user, signOut } = useAuth()

  if (!user || (user as any).status === "no-user") {
    return null
  }

  const firebaseUser = user as FirebaseUser

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={firebaseUser.photoURL || ""} alt={firebaseUser.displayName || "User"} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{firebaseUser.displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {firebaseUser.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profil" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Bana Özel</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profil/aktif-ilanlar" className="flex items-center">
              <Package className="mr-2 h-4 w-4" />
              <span>İlanlarım</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profil/favori-ilanlar" className="flex items-center">
              <Heart className="mr-2 h-4 w-4" />
              <span>Favorilerim</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profil/favori-saticilar" className="flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Favori Satıcılarım</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profil/son-islemler" className="flex items-center">
              <Handshake className="mr-2 h-4 w-4" />
              <span>Son İşlemlerim</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profil/ayarlar" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              <span>Ayarlar</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/giris" className="flex items-center text-red-600" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Çıkış Yap</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 