import { AxiosResponse, isAxiosError } from "axios";
import api from "./../config/config";

type loginApi = {
  token: string;
  name: string;
};

export const ApiLogin = async (email: string, password: string) => {
  try {
    const userData: AxiosResponse<loginApi> = await api.post(
      "/api/user/login",
      {
        email,
        password,
      }
    );

    const token = userData.data.token;
    const userName = userData.data.name;

    localStorage.setItem("token", token);
    localStorage.setItem("name", userName);
   
    
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return Promise.reject("Usuário não encontrado");
      }
      if (error.response?.status === 401) {
        return Promise.reject("Senha incorreta");
      }
    }
    return Promise.reject("Erro desconhecido");
  }
};

