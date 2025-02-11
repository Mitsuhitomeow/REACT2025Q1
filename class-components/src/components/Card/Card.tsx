import styles from './card.module.scss';

export function Card({
  name,
  birth_year,
}: {
  name: string;
  birth_year: string;
}) {
  return (
    <div className={styles.card}>
      <span>{name}</span>
      <span>
        Birth day: <b>{birth_year}</b>
      </span>
    </div>
  );
}
