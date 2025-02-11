import { PeopleFetchProps } from '../../../../types/interface';
import { Card } from '../../../Card/Card';

export function Cards({
  nameResult,
}: {
  nameResult: PeopleFetchProps['results'];
}) {
  return (
    <div>
      {nameResult.map(
        (prev: { name: string; birth_year: string }, id: number) => (
          <Card key={id} name={prev.name} birth_year={prev.birth_year} />
        )
      )}
    </div>
  );
}
