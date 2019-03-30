import React, { Component } from "react";
import "./App.css";
import Navbar from "../navbar/Navbar";
import * as BooksAPI from "../../utils/BooksAPI";
import ListShelves from "../listshelves/ListShelves";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onAddBook = (book, shelf) => {
    this.setState(state => ({
      [shelf]: state[shelf].concat([book])
    }));

    BooksAPI.update(book, shelf);
  };

  onRemoveBook = (book, shelf) => {
    this.setState(state => ({
      [shelf]: state[shelf].filter(b => b.id !== book.id)
    }));
  };

  render() {
    return (
      <div className="app">
        <Navbar />
        <ListShelves books={this.state.books} />
      </div>
    );
  }
}

export default App;
