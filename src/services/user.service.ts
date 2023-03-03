import { IUserResponse, UserForm } from "@type/user";
import api from "configs/axios";

export const login = async (body: UserForm) => {
  const reponse = await api.post<IUserResponse>("auth/local", body);
  return reponse.data;
};
