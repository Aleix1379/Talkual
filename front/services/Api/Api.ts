import axios from "axios";
import LocalStorageService from "~/services/LocalStorageService";

class Api {
  protected readonly baseURL = 'http://localhost:1337'
  protected readonly http = axios
  protected path: string = ''

  protected constructor(path: string) {
    this.init(path)
  }

  private init(path: string) {
    this.path = path
    const authToken = LocalStorageService.getAuthToken()
    if (authToken) {
      this.http.defaults.headers.common['Authorization'] = authToken
    }
  }

  public find<T>(page: number = 0, size: number = 2): Promise<T[]> {
    return this.http.get(`${this.getUrl()}?page=${page}&size=${size}`).then((res) => res.data)
  }

  protected getUrl(id?: number): string {
    if (id) {
      return `${this.baseURL}${this.path}/${id}`
    }
    return `${this.baseURL}${this.path}`
  }

}

export default Api
