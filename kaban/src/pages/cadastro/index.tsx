import { Container, Form } from "../login/styled-login";
import Button from "../../assets/componets/Buttons";

const Cadastro = () => {
  return (
    <div>
      <Container className="containerForm">
        <Form action="">
          <div>
            <h1>Arnia Trello</h1>
            <h3>Cadastro</h3>
          </div>

          <div className="formInputs">
            <label htmlFor="">Nome Completo:</label>
            <input type="text" />
          </div>
          <div className="formInputs">
            <label htmlFor="">E-mail:</label>
            <input type="text" />
          </div>

          <div className="formInputs">
            <label htmlFor="">Senha</label>
            <input type="text" />
          </div>

          <div className="formInputs">
            <label htmlFor="">Repita sua senha</label>
            <input type="text" />
          </div>

          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Cadastro;
