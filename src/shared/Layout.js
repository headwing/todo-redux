import React from "react";
import "./Layout.css";
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

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
