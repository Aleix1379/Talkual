import {User} from "~/types/User";

export interface AuthResponse {
  jwt: string;
  user: User;
}
