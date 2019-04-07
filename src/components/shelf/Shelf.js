import React from "react";
import styles from "./Shelf.module.css";
import Book from "../book/Book";

const Shelf = props => {
  const { title, books, onChange, shelfBooks } = props;

  return (
    <div>
      <div className={styles.Shelf}>
        {title && <div className={styles.Shelf__title}>{title}</div>}
        <ol className={styles.Shelf__grid}>
          {books.map(book => (
            <li key={book.id} className={styles.Shelf__griditem}>
              <Book book={book} onChange={onChange} shelfBooks={shelfBooks} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
