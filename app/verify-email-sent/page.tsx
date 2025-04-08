"use client"

import Link from "next/link"
import { Icons } from "@/components/icons"

export default function VerifyEmailSentPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Check your email
          </h1>
          <p className="text-sm text-muted-foreground">
            We've sent you an email with a verification link. Please check your inbox and click the link to verify your account.
          </p>
          <p className="text-sm text-muted-foreground">
            If you don't see the email, check your spam folder.
          </p>
          <Link
            href="/signin"
            className="text-sm text-primary hover:underline"
          >
            Return to sign in
          </Link>
        </div>
      </div>
    </div>
  )
} 