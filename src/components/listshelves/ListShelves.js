import React, { Component } from "react";
import Shelf from "../shelf/Shelf";

class ListShelves extends Component {
  componentDidMount() {}

  render() {
    const { books } = this.props;

    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const read = books.filter(book => book.shelf === "read");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");

    return (
      <div>
        <Shelf title="Currently Reading" books={currentlyReading} />
        <Shelf title="Read" books={read} />
        <Shelf title="Want To Read" books={wantToRead} />
      </div>
    );
  }
}

export default ListShelves;
