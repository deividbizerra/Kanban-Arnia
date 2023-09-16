import React, { useState, useEffect } from "react";
import {DeletCart, getCardsFromAPI } from "../../../services/card/card";



const KanbanBoard: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const apiCards = await getCardsFromAPI();
        setCards(apiCards);
      } catch (error) {
        console.error("Erro ao buscar os cartões da API:", error);
      }
    };
    fetchCards();
  }, []);


  const onDeleteCart = async (id:string) => {
    const newCards = await DeletCart(id)
    if(newCards){
      setCards(newCards)
    }
  }

 return(
  <>
  <div>
    COLUNA FIXA
  </div>
  <div>
    TODO
  </div>
  <div>
    DOING
  </div>
  <div>
    DONE
  </div>
  </>
 )
};

export default KanbanBoard;