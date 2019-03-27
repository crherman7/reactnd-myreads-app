import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import * as BooksAPI from "./BooksAPI";

class App extends Component {
  state = {
    currentlyReading: [],
    read: [],
    wantToRead: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        currentlyReading: books.filter(book => book.shelf === "read"),
        read: books.filter(book => book.shelf === "read"),
        wantToRead: books.filter(book => book.shelf === "wantToRead")
      }));
    });
  }

  onAddBook = (shelf, book) => {
    this.setState(state => ({
      [shelf]: state[shelf].concat([book])
    }));
  };

  onRemoveBook = (shelf, book) => {
    this.setState(state => ({
      [shelf]: state[shelf].filter(b => b.id !== book.id)
    }));
  };

  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default App;
