export default class LocalStorageService {
  private static keys = {
    AUTH_TOKEN: 'auth-token'
  }

  public static setAuthToken = (token: string) => {
    try {
      localStorage.setItem(LocalStorageService.keys.AUTH_TOKEN, token)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  public static removeAuthToken = () => {
    try {
      localStorage.removeItem(LocalStorageService.keys.AUTH_TOKEN)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  public static getAuthToken = (): string | null => {
    try {
      const token = localStorage.getItem(LocalStorageService.keys.AUTH_TOKEN)
      if (token) {
        return `Bearer ${token}`
      }
      return null
    } catch (error: any) {
      console.log('Error get auth token')
      console.log(error.message)
      return null
    }
  }

}
