import type { CardData } from "../../../../types/types.ts";

type CardProps = {
  card: CardData;
};

export default function ImagePopup(props: CardProps): React.JSX.Element {
    const { name, link } = props.card;

  return ( 
    <img className="popup__image" src={link} alt={name}/>
  );
}