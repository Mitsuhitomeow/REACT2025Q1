import { NamesProps } from '../../../types/interface';
import styles from './Search.module.scss';

export function Search({
  nameSearch,
  setNameSearch,
  handleSearch,
}: NamesProps) {
  return (
    <>
      <form className={styles.search_section}>
        <input
          type="text"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
    </>
  );
}
