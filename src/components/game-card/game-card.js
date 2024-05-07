import styles from "./game-card.module.scss";
import {Carousel} from "antd";

export default function GameCard({item}) {
  const {title, rating, images, multiplayer} = item;

  return <article className={styles.gameCard}>
    <Carousel arrows infinite={false}>
      <div className={styles.imageWrapper}>
        <img className={styles.gameCard__image} src={images.poster} alt={title}/>
      </div>
      {images?.screenshots.map((item, index) => (
        <div>
          <img className={styles.gameCard__image} src={item} alt={`${title}-${index}`} />
        </div>
      ))}
    </Carousel>
    <div className={styles.gameCard__info}>
      <div className={styles.info__wrapper}>
        <h2 className={styles.gameCard__name}>{title}</h2>
        <span className={styles.gameCard__rating}><b>Рейтинг:</b> {rating}</span>
        <span><b>Многопользовательский режим:</b> {multiplayer?.online ? 'есть' : 'нет'}</span>
        <span><b>Количество игроков оффлайн:</b> {multiplayer?.offlinePlayers}</span>
      </div>
    </div>
  </article>;
}

