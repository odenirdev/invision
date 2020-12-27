import React from "react";

import HomeContainer from "../../components/HomeContainer";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Container>
        <h1>
          Welcome to <strong>Invision</strong>
        </h1>
      </Container>
    </HomeContainer>
  );
};

export default Home;
