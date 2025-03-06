export interface PeopleFetchProps {
  results: {
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    mass: string;
  }[];
}

export interface NamesProps {
  peoples: PeopleFetchProps;
  nameSearch: string;
  setNameSearch: (value: string) => void;
  setNameResult: (value: PeopleFetchProps['results']) => void;
}

export interface ResultsProps {
  loading: boolean;
  error: string | null;
  nameResult: PeopleFetchProps['results'];
}

export interface HandleSearchProps {
  peoples: PeopleFetchProps;
  nameSearch: string;
  setNameResult: (value: PeopleFetchProps['results']) => void;
}

export interface CardProps {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
}
