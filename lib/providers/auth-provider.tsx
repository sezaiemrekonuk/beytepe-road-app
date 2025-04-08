"use client"

import { createContext, useContext, useEffect, useState, Suspense } from "react"
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter, useSearchParams } from "next/navigation"
import Cookies from "js-cookie"

export interface NoUser {
  status: "no-user"
}

interface AuthContextType {
  user: User | NoUser | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function AuthProviderContent({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | NoUser | null>({status: "no-user"})
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      setLoading(false)

      if (user) {
        // Get the ID token and set it as a cookie
        const token = await user.getIdToken()
        Cookies.set("firebase-auth-token", token, { expires: 7 }) // Expires in 7 days
      } else {
        Cookies.remove("firebase-auth-token")
      }
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    if (!email.endsWith(".edu.tr")) {
      throw new Error("Sadece .edu.tr email adresleri izin verilir")
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
    if (!userCredential.user.emailVerified) {
      await signOut(auth)
      throw new Error("Lütfen email adresinizi doğrulayınız")
    }

    // Get the callback URL from search params or default to home
    const callbackUrl = searchParams.get("callbackUrl") || "/"
    router.push(callbackUrl)
  }

  const signUp = async (email: string, password: string) => {
    if (!email.endsWith(".edu.tr")) {
      throw new Error("Sadece .edu.tr email adresleri izin verilir")
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    // Send verification email
    await sendEmailVerification(userCredential.user, {
      url: `${window.location.origin}/verify-email`,
      handleCodeInApp: true,
    })

    router.push("/verify-email-sent")
  }

  const signOutUser = async () => {
    await signOut(auth)
    Cookies.remove("firebase-auth-token")
    router.push("/giris")
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut: signOutUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <AuthProviderContent>{children}</AuthProviderContent>
    </Suspense>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
