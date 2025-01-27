import styles from './Search.module.scss';

export function Search() {
  return (
    <>
      <form className={styles.search_section}>
        <input type="search" />
        <button>Search</button>
      </form>
    </>
  );
}
