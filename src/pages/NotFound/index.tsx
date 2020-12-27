import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

import ContructionIllustration from "../../assets/images/contruction-illustration.svg";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Navbar />
      <Container>
        <header>
          <h1>
            <span>404</span> <br />
            Page Not Found
          </h1>
          <p>Page in development, come back soon</p>

          <Button
            backgroundColor="var(--primary-color)"
            color="#FFF"
            onClick={() => history.push("/")}
          >
            Go to home
          </Button>
        </header>
        <img src={ContructionIllustration} alt="Developing page" />
      </Container>
    </>
  );
};

export default NotFound;
