import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form a {
    text-decoration: none;
    color: var(--gray);
    transition: 0.2s;

    margin-left: auto;
    margin-top: 2vh;

    &:hover {
      filter: brightness(50%);
    }
  }

  span {
    margin: 0 auto;
    margin-bottom: 5vh;
  }
`;
