import { PeopleFetchProps } from '../types/interface';

export function filterPeople(
  peopleList: PeopleFetchProps['results'],
  searchName: string | undefined
) {
  if (!searchName) return peopleList;

  const filterList = peopleList.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  // console.log(filterList);

  return filterList;
}
