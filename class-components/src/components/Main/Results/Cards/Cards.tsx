import { CardProps, PeopleFetchProps } from '../../../../types/interface';
import { Card } from '../../../Card/Card';

export function Cards({
  nameResult,
}: {
  nameResult: PeopleFetchProps['results'];
}) {
  return (
    <div>
      {nameResult.map((prev: CardProps, id: number) => (
        <Card key={id} name={prev.name} birth_year={prev.birth_year} />
      ))}
    </div>
  );
}
