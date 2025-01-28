export interface PeopleFetchProps {
  results: { name: string }[];
}

export interface PeopleProps {
  people: PeopleFetchProps;
  loading: boolean;
  error: string | null;
}

export interface NamesProps {
  nameSearch: string;
  setNameSearch: (value: string) => void;
  handleSearch: () => void;
}

export interface ResultsProps {
  loading: boolean;
  error: string | null;
  nameResult: { name: string }[];
}
