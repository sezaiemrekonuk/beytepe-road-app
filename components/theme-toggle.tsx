"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:w-9 w-full justify-start px-3">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:mr-0 mr-2" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 md:mr-0 mr-2" />
          <span className="md:sr-only">Tema Değiştir</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full md:w-auto">
        <DropdownMenuItem onClick={() => setTheme("light")} className="justify-start">
          Açık
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="justify-start">
          Koyu
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="justify-start">
          Sistem
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 