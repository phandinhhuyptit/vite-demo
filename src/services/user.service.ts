import api from "configs/axios";
import { IUserResponse, UserForm } from "@type/user";

export const login = async (body: UserForm) => {
  const reponse = await api.post<IUserResponse>("auth/local", body);
  return reponse.data;
};
