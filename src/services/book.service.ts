import { IBookResponse } from "@type/book";
import api from "configs/axios";

export const getBooks = async (params? : any) => {
  const reponse = await api.get<IBookResponse>("books",);
  return reponse.data;
};



export const postBook = async (body : unknown, id : number) => {
  const reponse = await api.put<IBookResponse>(`books/${id}`,body);
  return reponse.data;
};
