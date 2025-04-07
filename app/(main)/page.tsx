import { MainSidebar } from "@/components/sidebar/main-sidebar"
import { ListingCard } from "@/components/listings/listing-card"

// Sample data - replace with real data from your backend
const sampleListings = [
  {
    id: "1",
    title: "2019 Honda Civic - Low Mileage",
    location: "Beytepe, Ankara",
    category: "Cars",
    imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800",
    isUrgent: true,
    date: "2024-03-20",
    lookingFor: "Electric scooter or bicycle"
  },
  {
    id: "2",
    title: "Shared Room in Student Apartment",
    location: "Near Campus",
    category: "Housing",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
    date: "2024-03-19",
    lookingFor: "Single room in dormitory"
  },
  {
    id: "3",
    title: "Mountain Bike - Perfect Condition",
    location: "Beytepe",
    category: "Bicycles",
    imageUrl: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=800",
    date: "2024-03-18",
    lookingFor: "Electric scooter"
  },
  {
    id: "4",
    title: "Study Room Available",
    location: "Library Building",
    category: "Campus Services",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800",
    isUrgent: true,
    date: "2024-03-20",
    lookingFor: "Group study space"
  },
  {
    id: "5",
    title: "Concert Tickets - Rock Band",
    location: "Campus Arena",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800",
    date: "2024-03-17",
    lookingFor: "Theater tickets"
  },
  {
    id: "6",
    title: "Textbooks for Sale",
    location: "Engineering Faculty",
    category: "Academic",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    date: "2024-03-16",
    lookingFor: "Different course textbooks"
  },
]

export default function HomePage() {
  return (
    <div className="container py-8 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
      {/* Sidebar - Hidden on mobile, shown as drawer */}
      <div className="hidden md:block">
        <MainSidebar />
      </div>

      {/* Main Content */}
      <div className="space-y-8 px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Öne Çıkan İlanlar</h2>
          <p className="text-muted-foreground">
            Beytepe Road'da en son takas tekliflerni keşfet
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  )
}
