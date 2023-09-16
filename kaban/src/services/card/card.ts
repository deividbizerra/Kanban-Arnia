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







