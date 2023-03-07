import React from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTable from "./SectionTable/SectionTable";
import { useBooks } from "@hooks/index";
import EditModal from "./EditModal/EditModal";
import { useNavigate } from "react-router-dom";
useNavigate;
function Book() {
  const { isLoading } = useBooks();
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading</div>;
  }
  
  return (
    <div className="book">
      <SectionTable />
      <EditModal />
      <button
        onClick={() => {
          navigate("/Author")
        }}
      >Author</button>
    </div>
  );
}

export default Book;
