import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Share2, Heart, MessageSquare, Phone, Star, MapPin, Calendar, Clock } from "lucide-react"

// This would come from your database
const getListing = (id: string) => {
  const listing = {
    id: "1",
    title: "2019 Honda Civic - Low Mileage",
    location: "Beytepe, Ankara",
    category: "Cars",
    imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800",
    isUrgent: true,
    date: "2024-03-20",
    time: "14:30",
    lookingFor: "Electric scooter or bicycle",
    description: "2019 model Honda Civic, düşük kilometreli, bakımlı, takas yapılabilir. Elektrikli scooter veya bisiklet ile takas yapılabilir.",
    user: {
      name: "Ahmet Yılmaz",
      memberSince: "2023",
      rating: 4.8,
      totalListings: 12,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"
    },
    details: {
      condition: "İyi",
      usage: "Düşük",
      year: "2019",
      color: "Beyaz",
      mileage: "45.000 km",
      transmission: "Otomatik",
      fuel: "Benzin"
    },
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800"
    ]
  }

  return listing
}


export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const listing = getListing(resolvedParams.id)

  if (!listing) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container max-w-7xl py-8 mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Media Column - 4 columns on desktop */}
          <div className="lg:col-span-4 space-y-4">
            {/* Main Image */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {listing.isUrgent && (
                    <Badge variant="destructive" className="absolute top-4 left-4">
                      Acil
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {listing.images.map((image, index) => (
                <button
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden hover:ring-2 ring-primary transition-all"
                >
                  <Image
                    src={image}
                    alt={`${listing.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Column - 5 columns on desktop */}
          <div className="lg:col-span-5 space-y-6">
            {/* Title and Meta */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight">{listing.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{listing.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{listing.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{listing.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Looking For */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Takas İçin Aranan</h3>
                <p className="text-muted-foreground leading-relaxed">{listing.lookingFor}</p>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="details">Detaylar</TabsTrigger>
                <TabsTrigger value="description">Açıklama</TabsTrigger>
                <TabsTrigger value="location">Konum</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-6">
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(listing.details).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground capitalize">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="description" className="mt-6">
                <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
              </TabsContent>
              <TabsContent value="location" className="mt-6">
                <div className="aspect-video bg-muted rounded-lg">
                  {/* Map component would go here */}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* User Column - 3 columns on desktop */}
          <div className="lg:col-span-3 space-y-6">
            {/* User Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={listing.user.avatar} />
                    <AvatarFallback>{listing.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{listing.user.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{listing.user.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{listing.user.totalListings} ilan</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Üyelik: {listing.user.memberSince}
                    </p>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    İletişime Geç
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Mesaj Gönder
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Similar Listings */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Benzer İlanlar</h3>
                <div className="space-y-4">
                  {/* Similar listings would go here */}
                  <div className="text-sm text-muted-foreground text-center py-4">
                    Benzer ilanlar yakında eklenecek
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 