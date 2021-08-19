import { FC } from "react";
import { Button } from "components/common";
import { Dish } from "components/template";

export const Dishes: FC = () => {
  return (
    <section className="menu__dishes">
      <Dish
        price={39.95}
        title="Grilled Seafood Paella"
        ingredients={[
          "Monkfish",
          "onion",
          "paella rice",
          "garlic & smoked paprika",
        ]}
        image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu2.jpg"
      />
       <Dish
        price={39.95}
        title="Grilled Seafood Paella"
        ingredients={[
          "Monkfish",
          "onion",
          "paella rice",
          "garlic & smoked paprika",
        ]}
        image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu2.jpg"
      />
        <Dish
        price={39.95}
        title="Grilled Seafood Paella"
        ingredients={[
          "Monkfish",
          "onion",
          "paella rice",
          "garlic & smoked paprika",
        ]}
        image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu2.jpg"
      />
        <Dish
        price={39.95}
        title="Grilled Seafood Paella"
        ingredients={[
          "Monkfish",
          "onion",
          "paella rice",
          "garlic & smoked paprika",
        ]}
        image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu2.jpg"
      />
     
      <div className="menu__button">
        <Button secondary>Odkryj całe menu</Button>
      </div>
    </section>
  );
};
