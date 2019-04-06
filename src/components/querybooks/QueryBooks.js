import React, { Component } from "react";
import styles from "./QueryBooks.module.css";
import * as BooksAPI from "../../utils/BooksAPI";
import Shelf from "../shelf/Shelf";
import { Link } from "react-router-dom";

class QueryBooks extends Component {
  state = {
    books: [],
    words: [
      "Android",
      "Art",
      "Artificial Intelligence",
      "Astronomy",
      "Austen",
      "Baseball",
      "Basketball",
      "Bhagat",
      "Biography",
      "Brief",
      "Business",
      "Camus",
      "Cervantes",
      "Christie",
      "Classics",
      "Comics",
      "Cook",
      "Cricket",
      "Cycling",
      "Desai",
      "Design",
      "Development",
      "Digital Marketing",
      "Drama",
      "Drawing",
      "Dumas",
      "Education",
      "Everything",
      "Fantasy",
      "Film",
      "Finance",
      "First",
      "Fitness",
      "Football",
      "Future",
      "Games",
      "Gandhi",
      "Homer",
      "Horror",
      "Hugo",
      "Ibsen",
      "Journey",
      "Kafka",
      "King",
      "Lahiri",
      "Larsson",
      "Learn",
      "Literary Fiction",
      "Make",
      "Manage",
      "Marquez",
      "Money",
      "Mystery",
      "Negotiate",
      "Painting",
      "Philosophy",
      "Photography",
      "Poetry",
      "Production",
      "Programming",
      "React",
      "Redux",
      "River",
      "Robotics",
      "Rowling",
      "Satire",
      "Science Fiction",
      "Shakespeare",
      "Singh",
      "Swimming",
      "Tale",
      "Thrun",
      "Time",
      "Tolstoy",
      "Travel",
      "Ultimate",
      "Virtual Reality",
      "Web Development",
      "iOS"
    ]
  };

  onTextChange = query => {
    this.state.words.includes(query) &&
      BooksAPI.search(query).then(books => this.setState({ books }));
  };

  render() {
    const { books } = this.state;
    const { onChange, shelfBooks } = this.props;

    return (
      <div>
        <div className={styles.QueryBar}>
          <Link to='/' className={styles.QueryBar__icon} />
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
