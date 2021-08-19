import { CustomBanner,DishDetail } from 'components/template';
import { FC } from 'react';

export const Cart: FC = () => {
  return (
    <section>
      <CustomBanner subtitle="discover" title="Oyster with hot souce" />
      <DishDetail/>
    </section>
  );
};
