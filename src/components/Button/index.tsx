import styled from "styled-components";

interface Props {
  backgroundColor: string;
  color: string;
}

export default styled.button`
  width: fit-content;
  min-width: 175px;
  height: 45px;

  border: 0;
  border-radius: 22px;

  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  color: ${({ color }: Props) => color};

  font-family: var(--content-font);
  font-weight: 700;

  cursor: pointer;

  box-shadow: var(--shadow);

  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 3vh;

  img {
    margin-right: 2vh;
  }

  &:hover {
    filter: brightness(80%);
  }
`;
