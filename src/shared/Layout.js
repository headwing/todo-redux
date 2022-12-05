import React from "react";
import "./Layout.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
