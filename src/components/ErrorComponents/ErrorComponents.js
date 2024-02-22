import React from "react";
import { Link } from "react-router-dom";
import styles from './ErrorComponents.modal.css'
const ErrorComponents = () => {
  return (
    <section className={styles.error_page}>

      <div className={styles.error_container}>
        <h1>Oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>

    </section>
  );
};

export default ErrorComponents;
