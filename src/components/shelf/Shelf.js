import React, { Component } from "react";
import styles from "./Shelf.css";
import Book from "../book/Book";

class Shelf extends Component {
  render() {
    const { title, books, onChange} = this.props;

    return (
      <div>
        <div className={styles.Shelf}>
          <div className={styles.Shelf__title}>{title}</div>
          <ol className={styles.Shelf__grid}>
            {books.map(book => (
              <li key={book.id} className={styles.Shelf__griditem}>
                <Book book={book} onChange={onChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
