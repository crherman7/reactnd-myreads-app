import React from "react";
import Shelf from "../shelf/Shelf";

const ListShelves = (props) => {
  const { books, onChange } = props;

  const shelves = [
    { snakeCase: "currentlyReading", titleCase: "Currently Reading" },
    { snakeCase: "read", titleCase: "Read" },
    { snakeCase: "wantToRead", titleCase: "Want To Read" }
  ];

  return (
    <div>
      {shelves.map(shelf => (
        <Shelf
          key={shelf.snakeCase}
          title={shelf.titleCase}
          books={books.filter(book => book.shelf === shelf.snakeCase)}
          onChange={onChange}
          shelfBooks={[]}
        />
      ))}
    </div>
  );
};

export default ListShelves;
