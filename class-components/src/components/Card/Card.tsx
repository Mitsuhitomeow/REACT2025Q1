import { CardProps } from '../../types/interface';
import styles from './card.module.scss';

export function Card({ name, birth_year, height, mass, gender }: CardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.card_title}>{name}</span>
      <div className={styles.card__prop_content}>
        <span>
          Birth day: <b>{birth_year}</b>
        </span>
        <span>
          Gender: <b>{gender}</b>
        </span>
        <span>
          Height: <b>{height}</b>
        </span>
        <span>
          Mass: <b>{mass}</b>
        </span>
      </div>
    </div>
  );
}
