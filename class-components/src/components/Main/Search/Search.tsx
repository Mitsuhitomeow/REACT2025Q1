import { NamesProps } from '../../../types/interface';
import { handleSearch } from '../../../utils/handleSearchClick';
import styles from './Search.module.scss';

export function Search({
  peoples,
  nameSearch,
  setNameSearch,
  setNameResult,
}: NamesProps) {
  return (
    <>
      <form className={styles.search_section}>
        <input
          type="text"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={() => handleSearch({ peoples, nameSearch, setNameResult })}
        >
          Search
        </button>
      </form>
    </>
  );
}
