"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { auth, applyActionCode } from "@/lib/firebase"
import { Icons } from "@/components/icons"

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [error, setError] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const oobCode = searchParams.get("oobCode")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!oobCode) {
        setStatus("error")
        setError("Invalid verification link")
        return
      }

      try {
        await applyActionCode(auth, oobCode)
        setStatus("success")
        // Redirect to sign in after 3 seconds
        setTimeout(() => {
          router.push("/signin")
        }, 3000)
      } catch (error) {
        setStatus("error")
        setError("Failed to verify email. The link may have expired.")
      }
    }

    verifyEmail()
  }, [oobCode, router])

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Email Verification
          </h1>
          {status === "loading" && (
            <p className="text-sm text-muted-foreground">
              Verifying your email...
            </p>
          )}
          {status === "success" && (
            <p className="text-sm text-muted-foreground">
              Email verified successfully! Redirecting to sign in...
            </p>
          )}
          {status === "error" && (
            <div className="text-sm text-red-500">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 