import styles from './Search.module.scss';

export function Search() {
  return (
    <>
      <section className={styles.search_section}>
        <input type="search" />
        <button>Search</button>
      </section>
    </>
  );
}
