import styles from "./header.module.scss";
import classNames from "classnames";
import {useState} from "react";

export default function Header() {
  const [valueSearch, setValueSearch] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleChangeSearch = (text) => {
    setValueSearch(text);
  }

  const handleSearchOpen = () => {
    setIsSearchVisible(!isSearchVisible);
  }

  return (
    <header className={classNames(styles.header)}>
      <div className={classNames(styles.wrapper, 'container')}>
        <a className={styles.link} href={"/"}>
          <p className={classNames(styles.title, 'logo')}>Games chart</p>
        </a>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li>
              <a className={styles.navigation__link} href={'/'}>Главная</a>
            </li>
          </ul>

          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <a href={"/"} onClick={handleSearchOpen}>
                <svg className={styles.navigation__searchIcon} width={19} height={20} fill="none">
                  <use xlinkHref="../img/sprite.svg#icon-search"></use>
                </svg>
              </a>
              {isSearchVisible &&
                <input
                  type="text"
                  value={valueSearch}
                  onChange={(e) => handleChangeSearch(e.target.value)}
                />
              }
            </li>
            <li className={styles.navigation__item}>
              <a className={styles.navigation__button} href={"/"}>
                <span>Sign in</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
