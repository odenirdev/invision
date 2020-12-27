import styled from "styled-components";

export const Container = styled.nav`
  height: 10vh;

  display: flex;
  align-items: center;

  padding: 0 2vh;

  h1 {
    width: fit-content;

    font-size: 3.5vh;

    font-family: var(--title-font);
    color: var(--title-color);
    font-weight: 700;

    cursor: pointer;
  }
`;
