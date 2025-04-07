"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

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
      <Link href={`/listings/${listing.id}`}>
        <div className="relative aspect-video">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover"
          />
          {listing.isUrgent && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              Urgent
            </Badge>
          )}
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold line-clamp-2">{listing.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            Looking for: {listing.lookingFor}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{listing.location}</span>
            <span>{listing.date}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
} 