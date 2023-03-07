import React from "react";
import styles from "./TableBody.module.scss";
import { Button, Icon } from "@components/index";
import { mergeClasses } from "@utils/string";
import { useBooks } from "@hooks/index";
import { Book } from "@type/book";
import { useGlobalStateContext } from "provider/GlobalStateProvider";
type RowProps = {
  book: Book;
};
const Row = ({ book }: RowProps) => {
  const { state, setModal } = useGlobalStateContext();

  return (
    <div className={styles["row"]}>
      <div className={styles["col"]}>{book?.id}</div>
      <div className={styles["col"]}>{book?.attributes?.title}</div>
      <div
        className={mergeClasses([
          styles["col"],
          "overflow-hidden text-ellipsis whitespace-nowrap",
        ])}
      >
        {book?.attributes?.content}
      </div>
      <div className={styles["col"]}>{""}</div>
      <div className={styles["col"]}>
        {book?.attributes?.price.toLocaleString("en-US")}
      </div>
      <div
        className={mergeClasses([styles["col"], "flex gap-2 justify-center"])}
      >
        <Button
          onClick={() => setModal("editBook", true, book)}
          variant="sea-green"
          className="!w-10 !h-10"
        >
          <Icon name="ic-edit" />
        </Button>
        <Button variant="ghost-white" className="!w-10 !h-10">
          <Icon name="ic-error-x" />
        </Button>
      </div>
    </div>
  );
};

function TableBoldy() {
  const { books } = useBooks();
  const data = books?.data;
  const pagination = books?.meta?.pagination;

  return (
    <div className={styles["body"]}>
      {data?.length ? (
        data.map((book) => <Row key={book.id} book={book} />)
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
}

export default TableBoldy;
