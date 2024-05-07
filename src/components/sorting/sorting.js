import {SortingGames} from "../../const";
import classNames from "classnames";
import {useState} from "react";
import styles from "./sorting.module.scss";

export default function Sorting({selectedSorting, onTypeClick}) {
  const [sortingIsOpened, setSortingIsOpened] = useState(false);

  const handleTypeSortingClick = (type) => {
    onTypeClick(type);
    setSortingIsOpened(false);
  };

  return (
    <div className={styles.sorting}>
      <span
        className={styles.sorting__type}
        onClick={() => setSortingIsOpened(!sortingIsOpened)}
      >
        <span className={styles.sorting__name}>{SortingGames[selectedSorting]}</span>
        <svg width={15} height={11} viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.15412 8.90378C7.20668 8.95929 7.27701 9.00469 7.35905 9.03605C7.44109 9.0674 7.53238 9.08379 7.62506 9.08379C7.71774 9.08379 7.80903 9.0674 7.89107 9.03605C7.97311 9.00469 8.04344 8.95929 8.096 8.90378L13.2522 3.48711C13.3119 3.42463 13.3469 3.35146 13.3534 3.27553C13.36 3.1996 13.3377 3.12383 13.2892 3.05644C13.2406 2.98905 13.1676 2.93263 13.0781 2.8933C12.9886 2.85397 12.8859 2.83324 12.7813 2.83336H2.46881C2.36445 2.83367 2.26218 2.85467 2.173 2.89409C2.08382 2.93352 2.01111 2.98988 1.96268 3.05711C1.91425 3.12434 1.89193 3.1999 1.89813 3.27566C1.90433 3.35143 1.93882 3.42453 1.99787 3.48711L7.15412 8.90378Z"
            fill="white"/>
        </svg>
      </span>
      <ul
        className={classNames(styles.sorting__options, styles.sorting__options__custom, {
          [styles.sorting__options__opened]: sortingIsOpened
        })}
      >
        {Object.entries(SortingGames).map(([type, value]) => (
          <li
            className={classNames(styles.sorting__option, {[styles.sorting__option__active]: type === selectedSorting})}
            key={type}
            onClick={() => handleTypeSortingClick(type)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
