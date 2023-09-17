import api from "./../config/config";


export const getCardsFromAPI = async () => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        throw new Error("Token não encontrado no localStorage.");
      }
  
      const response = await api.get("/api/card", {
        headers: {
          Authorization: token
        },
      });
  
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os cards:", error);
      throw error;
    }
  };


export const DeletCart = async (id:string) => {
  try {
    const token = localStorage.getItem("token")
    const newCard = await api.delete(`/api/card/${id}`,{
      headers: {Authorization: token}
    })
    return newCard.data
  }catch(e){
    alert("Erro ao buscar dados na api")
  }
}


export async function updateCardService (card: Card): Promise<Card[]> {
  const token = localStorage.getItem("token")

  const response = await api.put<Card[]>(`/api/card/${card._id}`,{
    data: {
      title: card.title,
      content: card.content,
      column: card.column,
    },
    headers: {Authorization: token}
    }
  )

  switch (response.status) {
    case 200: return response.data
    case 401: throw new Error('Token inválido, faça o login novamente')
    default: throw new Error('Ocorreu um erro em nossos servidores, tente novamente mais tarde')
  }}



export const createNewCardService = async (newCardData: NewCardData): Promise<Card> => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post("/api/card", newCardData, {
      headers: { Authorization: token },
    });
    return response.data as Card;
  } catch (error) {
    console.error("Erro ao criar novo card na API:", error);
    throw error;
  }
};