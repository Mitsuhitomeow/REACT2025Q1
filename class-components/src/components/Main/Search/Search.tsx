import { NamesProps } from '../../../types/interface';
import styles from './Search.module.scss';

export function Search({ nameSearch, setNameSearch }: NamesProps) {
  return (
    <>
      <form className={styles.search_section}>
        <input
          type="text"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
