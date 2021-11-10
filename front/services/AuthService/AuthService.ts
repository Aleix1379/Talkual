import Api from "~/services/Api"
import {AuthResponse} from "~/types/AuthResponse";

class AuthService extends Api {
  constructor() {
    super('/auth')
  }

  login(identifier: string, password: string): Promise<AuthResponse> {
    return this.http.post(`${this.getUrl()}/local`, {identifier, password}).then((res) => res.data)
  }

}

export default AuthService
