import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import * as BooksAPI from "../../utils/BooksAPI";
import ListShelves from "../listshelves/ListShelves";
import QueryBooks from "../querybooks/QueryBooks";
import { Route, Link } from "react-router-dom";
import styles from "./App.module.css";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onUpdateBook = (book, shelf, prevShelf) => {
    prevShelf === "none"
      ? this.setState(prevState => ({
          books: prevState.books.concat([{ ...book, shelf }])
        }))
      : this.setState(prevState => ({
          books: prevState.books.map(b =>
            b.id === book.id ? { ...b, shelf } : b
          )
        }));

    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className={styles.App}>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Navbar />
              <ListShelves
                books={this.state.books}
                onChange={this.onUpdateBook}
                shelfBooks={[]}
              />
              <Link to="/search" className={styles.App_icon} />
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <QueryBooks
              onChange={(book, shelf, prevShelf) => {
                this.onUpdateBook(book, shelf, prevShelf);
              }}
              shelfBooks={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
