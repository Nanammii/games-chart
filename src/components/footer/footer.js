import React from 'react';
import styles from "./footer.module.scss";
import classNames from "classnames";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.wrapper, "container")}>
        <a href={"/"}>
          <p className={classNames(styles.title, "logo")}>Games chart</p>
        </a>
        <span className={styles.copyright}>© 2024 Copyright</span>
      </div>
    </footer>
  );
}

export default Footer;
