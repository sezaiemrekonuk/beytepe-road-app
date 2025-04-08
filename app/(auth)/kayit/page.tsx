"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/providers/auth-provider"
import { Icons } from "@/components/icons"
import { getFirebaseErrorMessage } from "@/lib/utils/error-messages"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (process.env.NEXT_PUBLIC_EMAIL_REGISTRATION_ENABLED === "false") {
      setError("Kullanıcı kayıt işlemi başlamadı. sezaiemrekonuk@gmail.com adresine mail atınız.")
      return
    }

    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor")
      return
    }

    if (password.length < 6) {
      setError("Şifre en az 6 karakter olmalıdır")
      return
    }

    if (!email.endsWith(".edu.tr")) {
      setError("Sadece .edu.tr email adresleri kullanılabilir")
      return
    }

    setLoading(true)

    try {
      await signUp(email, password)
      router.push("/verify-email-sent")
    } catch (err) {
      setError(getFirebaseErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Hesap oluştur
          </h1>
          <p className="text-sm text-muted-foreground">
            Hesap oluşturmak için .edu.tr email adresinizi girin
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
              placeholder="your.email@edu.tr"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
              minLength={6}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">
              Şifreyi doğrula
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
              minLength={6}
            />
          </div>
          {error && (
            <div className="text-sm text-red-500">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Hesap oluşturuluyor..." : "Hesap oluştur"}
          </button>
        </form>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Devam ettiğinizde, şu şartları kabul ediyorsunuz:{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Hizmet Şartları
          </Link>{" "}
          ve{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Gizlilik Politikası
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/giris"
        className="absolute right-4 top-4 md:right-8 md:top-8"
      >
        Giriş yap
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Icons.logo className="mr-2 h-6 w-6" />
          Beytepe Road
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Kampüsler arası güvenli takas yapmanın yeni yolu.&rdquo;
            </p>
            <footer className="text-sm">Beytepe Road</footer>
          </blockquote>
        </div>
      </div>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <SignUpForm />
      </Suspense>
    </div>
  )
} 