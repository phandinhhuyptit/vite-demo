export interface IUser {
  id: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserResponse {
  jwt: string;
  user: IUser;
  status: string;
}

export interface UserForm {
  identifier: string;
  password: string;
}
