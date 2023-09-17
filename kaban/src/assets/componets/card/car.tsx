import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { DeletCart, updateCardService } from '../../../services/card/card';
import { Box, Column, Input, TextArea } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
};

const Cards = ({ title, cards, setCards }: Props) => {
  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const [editedCardTitle, setEditedCardTitle] = useState<string>('');
  const [editedCardContent, setEditedCardContent] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const startEditing = (cardId: string, title: string, content: string) => {
    setEditingCardId(cardId);
    setEditedCardTitle(title);
    setEditedCardContent(content);
    setIsEditing(true);
  };

  const saveEditedCard = async (cardId: string) => {
    const editedCard = cards.find((card) => card._id === cardId);
    if (editedCard){
      editedCard.title = editedCardTitle;
      editedCard.content = editedCardContent;
    
   

    try {
      const updatedCards = await updateCardService(editedCard);
      setCards(updatedCards);
      setIsEditing(false);
      setEditingCardId(null);
    } catch (error) {
      console.error('Erro ao atualizar o card:', error);
      // Lida com o erro de atualização aqui
    }
  }
  };

  const updateCard = async (card: Card, position: 'left' | 'right') => {
    let column = card.column;

    if (['TODO', 'DONE'].includes(column)) {
      column = 'DOING';
    } else if (position === 'left') {
      column = 'TODO';
    } else {
      column = 'DONE';
    }

    const response = await updateCardService({
      ...card,
      column,
    });

    setCards(response);
  };

  const moveToLeft = (card: Card) => {
    updateCard(card, 'left');
  };

  const moveToRight = (card: Card) => {
    updateCard(card, 'right');
  };

  const onDeleteCart = async (id: string) => {
    const newCards = await DeletCart(id);
    if (newCards) {
      setCards(newCards);
    }
  };

  return (
    <Column>
      <h1>{title}</h1>
      <div>
        {cards.map((card) => (
          <Box key={card._id}>
            {isEditing && editingCardId === card._id ? (
              <>
                <Input
                  type="text"
                  value={editedCardTitle}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEditedCardTitle(e.target.value)
                  }
                />
                <TextArea
                  value={editedCardContent}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setEditedCardContent(e.target.value)
                  }
                />
                <button onClick={() => saveEditedCard(card._id)}>Salvar</button>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => startEditing(card._id, card.title, card.content)}
                />
                <h3>{card.title}</h3>
                <div>{card.content}</div>
              </>
            )}
            
            {card.column !== 'TODO' && (
              <button onClick={() => moveToLeft(card)}> &lt;</button>
            )}
            <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteCart(card._id)} />
            {card.column !== 'DONE' && (
              <button onClick={() => moveToRight(card)}>&gt;</button>
            )}
          </Box>
        ))}
      </div>
    </Column>
  );
};

export default Cards;
