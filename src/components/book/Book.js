import React, { Component } from "react";
import styles from "./Book.module.css";

class Book extends Component {
  onShelfChangerClick = (shelf, book, prevShelf) => {
    prevShelf && this.props.onChange(book, shelf, prevShelf);
  };

  render() {
    const { book, shelfBooks } = this.props;

    const shelfList = shelfBooks
      .filter(shelfBook => shelfBook.id === book.id)
      .map(shelfBook => shelfBook.shelf);

    const shelf = book.shelf
      ? book.shelf
      : shelfList[0]
      ? shelfList[0]
      : "none";

    return (
      <div>
        <div className={styles.Book}>
          <img
            className={styles.Book__cover}
            src={book.imageLinks && book.imageLinks.thumbnail}
            alt=""
          />
          <div className={styles.Book__title}>{book.title}</div>
          {book.authors &&
            book.authors.map(author => (
              <div key={author} className={styles.Book__author}>
                {author}
              </div>
            ))}
          <div
            onClick={this.onShelfChangerClick}
            className={styles.Book__shelfchanger}
          >
            <select
              defaultValue={shelf}
              onChange={e =>
                this.onShelfChangerClick(e.target.value, book, shelf)
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
