import { Dispatch, SetStateAction } from "react";
import { DeletCart, updateCardService } from "../../../services/card/card";
import { Box, Column } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // Importe o ícone "faTrash" da biblioteca FontAwesome

type Props = {
  title: string;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
};

const Cards = ({ title, cards, setCards }: Props) => {
  
  const updateCard = async (card: Card, position: "left" | "right") => {
    let column = card.column;

    if (["TODO", "DONE"].includes(column)) {
      column = "DOING";
    } else if (position === "left") {
      column = "TODO";
    } else {
      column = "DONE";
    }

    const response = await updateCardService({
      ...card,
      column,
    });

    setCards(response);
  };

  const moveToLeft = (card: Card) => {
    updateCard(card, "left");
  };

  const moveToRight = (card: Card) => {
    updateCard(card, "right");
  };

  const onDeleteCart = async (id:string) => {
    const newCards = await DeletCart(id)
    if(newCards){
      setCards(newCards)
    }
  }


  return (
    <Column>
      <h1>{title}</h1>

      <div>
        {cards.map((card) => (
          <Box key={card._id}>
            <h3>{card.title}</h3>
            <div>{card.content}</div>

            <div>

            


              {card.column !== "TODO" && (
                <button onClick={() => moveToLeft(card)}> &lt;</button>
              )}
              <FontAwesomeIcon icon={faTrash} onClick={()=> onDeleteCart(card._id)}/>
              {card.column !== "DONE" && (
                <button onClick={() => moveToRight(card)} >
  
                  &gt;
                </button>
              )}
              
            </div>
          </Box>
        ))}
      </div>
    </Column>
  );
};

export default Cards;
