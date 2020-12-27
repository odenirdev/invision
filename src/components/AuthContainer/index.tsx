import React from "react";
import Carousel from "../Carousel";

import { Container } from "./styles";

const AuthContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="carousel-container">
        <Carousel />
      </div>
      <main className="auth-content-container">
        <header className="auth-content-header">
          <h1>Invision</h1>
        </header>
        <section>{children}</section>
      </main>
    </Container>
  );
};

export default AuthContainer;
