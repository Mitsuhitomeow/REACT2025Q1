export function filterPeople(
  peopleList: { name: string }[],
  searchName: string | undefined
) {
  if (!searchName) return peopleList;

  const filterList = peopleList.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  // console.log(filterList);

  return filterList;
}
