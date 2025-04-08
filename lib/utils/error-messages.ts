export function getFirebaseErrorMessage(error: any): string {
  const errorCode = error.code || error.message

  switch (errorCode) {
    case "auth/invalid-email":
      return "Geçersiz email adresi"
    case "auth/user-disabled":
      return "Bu hesap devre dışı bırakılmış"
    case "auth/user-not-found":
      return "Bu email adresi ile kayıtlı kullanıcı bulunamadı"
    case "auth/wrong-password":
      return "Hatalı şifre"
    case "auth/email-already-in-use":
      return "Bu email adresi zaten kullanımda"
    case "auth/weak-password":
      return "Şifre çok zayıf, lütfen daha güçlü bir şifre seçin"
    case "auth/operation-not-allowed":
      return "Bu işlem şu anda kullanılamıyor"
    case "auth/too-many-requests":
      return "Çok fazla başarısız giriş denemesi, lütfen daha sonra tekrar deneyin"
    case "auth/network-request-failed":
      return "Ağ bağlantısı hatası, lütfen internet bağlantınızı kontrol edin"
    case "auth/requires-recent-login":
      return "Bu işlem için son zamanlarda giriş yapmanız gerekiyor"
    case "auth/expired-action-code":
      return "Doğrulama bağlantısının süresi dolmuş"
    case "auth/invalid-action-code":
      return "Geçersiz doğrulama bağlantısı"
    default:
      return "Bir hata oluştu, lütfen daha sonra tekrar deneyin"
  }
} 