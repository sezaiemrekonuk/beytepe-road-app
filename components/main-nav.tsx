"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MapPin, Menu, X, Compass, Route, Info, Handshake } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { UserProfileMenu } from "./user-profile-menu"
import { MessagesMenu } from "./messages-menu"
import { NotificationsMenu } from "./notifications-menu"
import { FavoritesMenu } from "./favorites-menu"

const mainNavItems = [
  {
    title: "Ana Sayfa",
    href: "/",
  },
  {
    title: "Takas",
    href: "/takas",
    dropdown: {
      title: "Takas yap, ihtiyacını karşıla",
      description: "Para harcama, ihtiyacını karşıla",
      items: [
        {
          title: "Popüler Takaslar",
          href: "/takas/populer",
          description: "Popüler takaslar hakkında bilgi al",
        },
        {
          title: "Tüm Takaslar",
          href: "/takas/tum",
          description: "Tüm takaslar hakkında bilgi al",
        },
        {
          title: "Yakıkımdaki Takaslar",
          href: "/takas/yakin",
          description: "Konumunuza en yakın takaslar",
        },
      ],
    },
  },
  {
    title: "Nasıl Çalışır?",
    href: "/nasıl-calisir",
    dropdown: {
      title: "Nasıl Çalışır?",
      description: "Takas sistemimiz çalışır?",
      items: [
        {
          title: "Takas Yap",
          href: "/nasıl-calisir/takas-yap",
          description: "Takas yapmak için gerekli adımlar",
        },
        {
          title: "İlan Ver",
          href: "/nasıl-calisir/ilan-ver",
          description: "İlan vermek için gerekli adımlar",
        },
        {
          title: "Kurallarımız",
          href: "/nasıl-calisir/kurallar",
          description: "Kurallarımız hakkında bilgi al",
        },
      ],
    },
  },
  {
    title: "Hakkımızda",
    href: "/hakkimizda",
    dropdown: {
      title: "Hakkımızda",
      items: [
        {
          title: "Hakkımızda",
          href: "/hakkimizda/",
          description: "Hakkımızda hakkında bilgi al",
        },
        {
          title: "Geliştiriciler",
          href: "/hakkimizda/geliştiriciler",
          description: "Geliştiriciler hakkında bilgi al",
        },
        {
          title: "İletişim",
          href: "/hakkimizda/iletisim",
          description: "İletişim hakkında bilgi al",
        },
      ],
    },
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={cn("border-b", mobileMenuOpen && "fixed top-0 left-0 right-0 z-50 bg-background")}>
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <Handshake className="h-6 w-6" />
          <span className="font-bold">Beytepe Road</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 ml-6">
          <NavigationMenu>
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          pathname.startsWith(item.href) &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href={item.href}
                              >
                                {item.title === "Map" && (
                                  <Compass className="h-6 w-6" />
                                )}
                                {item.title === "Routes" && (
                                  <Route className="h-6 w-6" />
                                )}
                                {item.title === "About" && (
                                  <Info className="h-6 w-6" />
                                )}
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  {item.dropdown.title}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {item.dropdown.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          {item.dropdown.items.map((dropdownItem) => (
                            <ListItem
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              title={dropdownItem.title}
                            >
                              {dropdownItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === item.href &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Button
            variant="default"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            asChild
          >
            <Link href="/ilanlar/olustur">Takas İlanı Ver</Link>
          </Button>
          <MessagesMenu />
          <NotificationsMenu />
          <FavoritesMenu />
          <UserProfileMenu />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t fixed top-16 left-0 right-0 bg-background z-10">
          <div className="flex flex-col space-y-2 p-4">
            {mainNavItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors block",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.items.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                variant="default"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                asChild
              >
                <Link href="/ilanlar/olustur" onClick={() => setMobileMenuOpen(false)}>
                  Takas İlanı Ver
                </Link>
              </Button>
              <div className="flex items-center justify-between">
                <MessagesMenu />
                <NotificationsMenu />
                <FavoritesMenu />
                <UserProfileMenu />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 