import "./style.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => {
        navigate("/");
      }}
    >
      Todo List💜
    </header>
  );
}

export default Header;
