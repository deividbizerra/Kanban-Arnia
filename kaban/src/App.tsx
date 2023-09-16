import { ToastContainer } from "react-toastify";
import GlobalStyled from "./assets/componets/global-styled";
import Router from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyled />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
