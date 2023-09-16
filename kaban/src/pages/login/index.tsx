import { Form, Container } from "../login/styled-login";
import Button from "../../assets/componets/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { ApiLogin } from "../../services/user/user";

type ValuesProps = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<ValuesProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await ApiLogin(values.email, values.password);
      navigate("/home", { replace: true });
      setError(null);
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 401) {
        setError("Email ou senha incorretos");
      }else(
        toast("Email ou senha incorreto")
      )
    }
  };

  return (
    <Container className="containerForm">
      <Form action="" onSubmit={handleSubmit}>
        <div>
          <h1>Arnia Trello</h1>
        </div>

        <div className="formInputs">
          <label htmlFor="">E-mail</label>
          <input type="text" name="email" onChange={handleChange} />
          <span>{error}</span>
        </div>

        <div className="formInputs">
          <label htmlFor="">Senha</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <Button type="submit">Entrar</Button>
        <Link
          to="/cadastro"
          style={{ textAlign: "center", color: "#ffff", marginTop: 5 }}
        >
          Cadastre-se
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
