import { CardProps, PeopleFetchProps } from '../../../../types/interface';
import { Card } from '../../../Card/Card';
import style from './cards.module.scss';

export function Cards({
  nameResult,
}: {
  nameResult: PeopleFetchProps['results'];
}) {
  return (
    <div className={style.cards_container}>
      {nameResult.map((prev: CardProps, id: number) => (
        <Card
          key={id}
          name={prev.name}
          birth_year={prev.birth_year}
          gender={prev.gender}
          height={prev.height}
          mass={prev.mass}
        />
      ))}
    </div>
  );
}
