export interface PeopleFetchProps {
  results: { name: string }[];
}

export interface PeopleProps {
  people: PeopleFetchProps;
  loading: boolean;
  error: string | null;
}

export interface ResultsProps {
  peoples: { results: { name: string }[] };
  loading: boolean;
  error: string | null;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
