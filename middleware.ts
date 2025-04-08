import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "@/lib/firebase"
import { getAuth } from "firebase/auth"

// List of public routes that don't require authentication
const publicRoutes = ["/giris", "/kayit", "/verify-email", "/verify-email-sent"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the route is public
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Get the Firebase auth token from cookies
  const authToken = request.cookies.get("firebase-auth-token")?.value

  // If there's no token and the route is not public, redirect to signin
  if (!authToken) {
    const signInUrl = new URL("/giris", request.url)
    // Only add callbackUrl if we're not already on the signin page
    if (!pathname.startsWith("/giris")) {
      signInUrl.searchParams.set("callbackUrl", pathname)
    }
    return NextResponse.redirect(signInUrl)
  }

  // If user is authenticated and trying to access auth pages, redirect to home
  if (authToken && (pathname.startsWith("/giris") || pathname.startsWith("/kayit"))) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
} 