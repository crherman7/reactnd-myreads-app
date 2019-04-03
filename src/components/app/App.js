import React, { Component } from "react";
import "./App.css";
import Navbar from "../navbar/Navbar";
import * as BooksAPI from "../../utils/BooksAPI";
import ListShelves from "../listshelves/ListShelves";
import QueryBooks from "../querybooks/QueryBooks";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onUpdateBook = (book, shelf) => {
    this.setState(prevState => ({
      books: prevState.books.map(b => (
        b.id === book.id ? {...b, shelf}: b
      ))
    }));

    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        {/* <Navbar />
        <ListShelves books={this.state.books} onChange={this.onUpdateBook} /> */}
        <QueryBooks onChange={this.onUpdateBook}/>
      </div>
    );
  }
}

export default App;
