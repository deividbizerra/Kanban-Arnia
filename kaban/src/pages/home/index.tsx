import { useEffect, useState } from "react";
import Header from "../../assets/componets/Header";
import Cards from "../../assets/componets/card/car";
import { Column, Container, Input, TextArea } from "../../assets/componets/card/styled";
import { createNewCardService, getCardsFromAPI } from "../../services/card/card";
import { toast } from "react-toastify";

const Home = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardContent, setNewCardContent] = useState("");

  useEffect(() => {
    getCardsFromAPI()
      .then(setCards)
      .catch((e) => {
        if (e instanceof Error) {
          toast.error(e.message);
        }
      });
  }, []);

  
  const addNewCard = async () => {
    try {
      const newCardData = {
        title: newCardTitle,
        content: newCardContent,
      };
  
     
      const response = await createNewCardService(newCardData);
  
     
      setCards([...cards, response]);
     

      
      setNewCardTitle("");
      setNewCardContent("");

    } catch (error) {
      console.error("Erro ao criar novo card:", error);
      toast.error("Erro ao criar novo card. Verifique sua conexão ou tente novamente mais tarde.");
    }
  };
  
  return (
    <div>
      <Header />
      <Container>
      <Column>
  <h1>New</h1>
  <div>
    <Input
      type="text"
      placeholder="Titulo"
      value={newCardTitle}
      onChange={(e) => setNewCardTitle(e.target.value)}
    />
    <TextArea
      placeholder="Descrição"
      value={newCardContent}
      onChange={(e) => setNewCardContent(e.target.value)}
    />
    <button onClick={addNewCard}>Salvar</button>
  </div>
</Column>


        <Cards
          title="TO DO"
          cards={cards.filter((card) => card.column === "TODO")}
          setCards={setCards}
        />
        <Cards
          title="DOING"
          cards={cards.filter((card) => card.column === "DOING")}
          setCards={setCards}
        />
        <Cards
          title="DONE"
          cards={cards.filter((card) => card.column === "DONE")}
          setCards={setCards}
        />
      </Container>
    </div>
  );
};

export default Home;
