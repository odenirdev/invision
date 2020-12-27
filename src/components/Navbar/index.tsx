import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <h1 onClick={() => history.push("/")}>Invision</h1>
    </Container>
  );
};

export default Navbar;
