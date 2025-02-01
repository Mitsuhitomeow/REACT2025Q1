import { HandleSearchProps } from '../types/interface';
import { filterPeople } from './filterPeople';

export function handleSearch({
  peoples,
  nameSearch,
  setNameResult,
}: HandleSearchProps) {

  const filteredResults = filterPeople(peoples.results, nameSearch) || [];

  return nameSearch.trim() === ''
    ? setNameResult(peoples.results || [])
    : setNameResult(filteredResults);
}
