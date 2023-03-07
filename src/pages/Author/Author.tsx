import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function Author() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/book");
      }}
    >
      {" "}
      Book
    </button>
  );
}

export default Author;
