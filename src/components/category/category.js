import styles from "./category.module.scss";
import GameCard from "../game-card/game-card";

export default function Category({items}) {

  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>Игры</h2>
      <div className={styles.category__games}>
        <div className={styles.games__list}>
          {items.map((item) => (
            <GameCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
