import React, { Component } from "react";
import styles from "./Shelf.css";

class Shelf extends Component {
  render() {
    const { title, books } = this.props;

    return (
      <div>
        <div className={styles.Shelf}>
          <div className={styles.Shelf__title}>
            <strong>{title}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
