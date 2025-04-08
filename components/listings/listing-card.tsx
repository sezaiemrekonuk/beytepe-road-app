"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { LocateIcon, CalendarIcon } from "lucide-react"

interface ListingCardProps {
  listing: {
    id: string
    title: string
    location: string
    category: string
    imageUrl: string
    isUrgent?: boolean
    date: string
    lookingFor: string
  }
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/ilan/${listing.id}`}>
        <div className="relative aspect-video">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover"
          />
          {listing.isUrgent && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              Acil
            </Badge>
          )}
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold line-clamp-2">{listing.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1 text-destructive">
            İstenen: <span className="font-bold text-primary">{listing.lookingFor}</span>
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center"><LocateIcon className="w-4 h-4 mr-1" /> {listing.location}</span>
            <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-1" /> {listing.date}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
} 