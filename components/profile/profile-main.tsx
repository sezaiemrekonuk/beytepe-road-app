import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"

export function ProfileMain() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profil Bilgileri</CardTitle>
          <CardDescription>
            Kişisel bilgilerinizi buradan düzenleyebilirsiniz
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
              <Camera className="mr-2 h-4 w-4" />
              Fotoğraf Değiştir
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Ad Soyad</Label>
              <Input id="fullName" placeholder="Ad Soyad" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <Input id="username" placeholder="Kullanıcı Adı" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input id="email" type="email" placeholder="E-posta" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" placeholder="Telefon" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Şehir</Label>
              <Input id="city" placeholder="Şehir" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="province">İlçe</Label>
              <Input id="province" placeholder="İlçe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipcode">Posta Kodu</Label>
              <Input id="zipcode" placeholder="Posta Kodu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthdate">Doğum Tarihi</Label>
              <Input id="birthdate" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adres</Label>
            <Textarea
              id="address"
              placeholder="Adres bilgilerinizi giriniz"
              className="min-h-[100px]"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" placeholder="LinkedIn Profil Linki" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input id="github" placeholder="GitHub Profil Linki" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Kişisel Web Sitesi</Label>
              <Input id="website" placeholder="Web Sitesi URL" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Cinsiyet</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cinsiyet seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Erkek</SelectItem>
                  <SelectItem value="female">Kadın</SelectItem>
                  <SelectItem value="other">Diğer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Hakkımda</Label>
            <Textarea
              id="description"
              placeholder="Kendinizden bahsedin"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-end">
            <Button>Değişiklikleri Kaydet</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 