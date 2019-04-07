import React, { Component } from "react";
import styles from "./QueryBooks.module.css";
import * as BooksAPI from "../../utils/BooksAPI";
import Shelf from "../shelf/Shelf";
import { Link } from "react-router-dom";

class QueryBooks extends Component {
  state = {
    books: []
  };

  onTextChange = query => {
    query
      ? BooksAPI.search(query).then(books => {
          const hasResults = Array.isArray(books);
          this.setState({ books: hasResults ? books : [] });
        })
      : this.setState({ books: [] });
  };

  render() {
    const { books } = this.state;
    const { onChange, shelfBooks } = this.props;

    return (
      <div>
        <div className={styles.QueryBar}>
          <Link to="/" className={styles.QueryBar__icon} />
          <input
            onChange={e => this.onTextChange(e.target.value)}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
        <Shelf
          onChange={onChange}
          title=""
          books={books}
          shelfBooks={shelfBooks}
        />
      </div>
    );
  }
}

export default QueryBooks;
