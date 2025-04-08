import { ProfileSidebar } from "@/components/profile/profile-sidebar"
import { ProfileMain } from "@/components/profile/profile-main"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64">
          <ProfileSidebar />
        </div>
        <div className="flex-1">
          <ProfileMain />
        </div>
      </div>
    </div>
  )
} 