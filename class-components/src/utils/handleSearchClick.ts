import { HandleSearchProps, PeopleFetchProps } from '../types/interface';
import { filterPeople } from './filterPeople';

export function handleSearch({
  peoples,
  nameSearch,
  setNameResult,
}: HandleSearchProps) {
  const filteredResults =
    filterPeople(peoples.results as PeopleFetchProps['results'], nameSearch) ||
    [];

  return nameSearch.trim() === ''
    ? setNameResult((peoples.results as PeopleFetchProps['results']) || [])
    : setNameResult(filteredResults);
}
