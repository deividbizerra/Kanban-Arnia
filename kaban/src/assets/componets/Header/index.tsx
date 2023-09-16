import { Link } from "react-router-dom";
import { HeaderStyled } from "./header-styled";

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h1>Arnia Trello</h1>
      </div>

      <div>
        Olá, {localStorage.getItem("name")}
        <Link to="/">Sair</Link>
      </div>
    </HeaderStyled>
  );
};

export default Header;
