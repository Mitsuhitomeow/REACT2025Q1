
export interface PeopleFetchProps {
  results: { name: string }[]
}

export interface PeopleProps {
  people: PeopleFetchProps,
  loading: boolean,
  error: string | null,
}