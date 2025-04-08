import { NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email ve şifre gereklidir" },
        { status: 400 }
      )
    }

    if (!email.endsWith(".edu.tr")) {
      return NextResponse.json(
        { message: "Sadece .edu.tr email adresleri izin verilir" },
        { status: 400 }
      )
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    // Send verification email
    await sendEmailVerification(userCredential.user, {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/verify-email`,
      handleCodeInApp: true,
    })

    return NextResponse.json(
      { 
        message: "Kullanıcı başarıyla oluşturuldu. Lütfen email adresinizi kontrol ediniz.",
        user: userCredential.user 
      },
      { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Kullanıcı oluşturma hatası" },
      { status: 500 }
    )
  }
} 