export function filterPeople(
  peopleList: { name: string }[],
  searchName: string | undefined
) {
  if (!searchName) return peopleList;

  return peopleList.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );
}
