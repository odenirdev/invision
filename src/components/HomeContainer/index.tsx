import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

import { Aside } from "react-og-navbar";

import { Container, AsideBottom } from "./styles";

const HomeContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <Aside>
        <Link to="/">
          <Aside.Icon>
            <FaHome />
          </Aside.Icon>
          <Aside.Title>Home</Aside.Title>
        </Link>

        <AsideBottom>
          <Link to="/auth">
            <Aside.Icon>
              <FaSignOutAlt />
            </Aside.Icon>
            <Aside.Title>Sair</Aside.Title>
          </Link>
        </AsideBottom>
      </Aside>
      <Aside.Main>{children}</Aside.Main>
    </Container>
  );
};

export default HomeContainer;
