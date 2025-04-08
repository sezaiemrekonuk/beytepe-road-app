"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function NotFoundContent() {
  const searchParams = useSearchParams()
  const message = searchParams.get("message") || "Sayfa bulunamadı"
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-xl">{message}</p>
    </div>
  )
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <NotFoundContent />
    </Suspense>
  )
} 