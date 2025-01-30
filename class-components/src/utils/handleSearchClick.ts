import { HandleSearchProps } from '../types/interface';
import { filterPeople } from './filterPeople';

export function handleSearch({
  peoples,
  nameSearch,
  setNameResult,
}: HandleSearchProps) {
  if (nameSearch.trim() === '') {
    setNameResult(peoples.results || []);
  } else {
    const filteredResults = filterPeople(peoples.results, nameSearch) || [];
    setNameResult(filteredResults);
  }
}
