import React from "react";
import styles from "./Table.module.scss";

function TableHeader() {
  return (
    <header className={styles["header"]}>
      <div>No.</div>
      <div>Title</div>
      <div>Content</div>
      <div>Author</div>
      <div>Price</div>
      <div>Action</div>
    </header>
  );
}

export default TableHeader;
