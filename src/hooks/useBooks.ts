import React from "react";
import { getBooks } from "@services/book.service";
import { useQuery } from "@tanstack/react-query";

function useBooks() {
  const { isLoading, data: books } = useQuery(["books"], () => getBooks(), {
    // select: (data) => data.data.posts,
    onSuccess(data) {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  return { isLoading, books };
}

export default useBooks;
