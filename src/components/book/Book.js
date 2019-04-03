import React, { Component } from "react";
import styles from "./Book.module.css";

class Book extends Component {
  state = {};

  onShelfChangerClick = (e, book, shelf) => {
    shelf && this.props.onChange(book, e.target.value);
  };

  render() {
    const { book } = this.props;

    return (
      <div>
        <div className={styles.Book}>
          <img
            className={styles.Book__cover}
            src={book.imageLinks.thumbnail}
            alt=""
          />
          <div className={styles.Book__title}>{book.title}</div>
          {book.authors.map(author => (
            <div key={author} className={styles.Book__author}>
              {author}
            </div>
          ))}
          <div
            onClick={this.onShelfChangerClick}
            className={styles.Book__shelfchanger}
          >
            <select value={book.shelf} onChange={(e) => this.onShelfChangerClick(e, book, book.shelf)}>
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
