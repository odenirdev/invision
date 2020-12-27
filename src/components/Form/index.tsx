import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }
`;

export default styled.form`
  width: 100%;
  max-width: 40vh;

  margin: 0 auto;
  margin-top: 8vh;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--gray);
  position: relative;

  &.label-focus {
    color: var(--blue);
  }

  &.label-focus::after {
    animation: ${animation} 1s forwards;
  }

  &::after {
    content: "";
    height: 100%;
    position: absolute;
    border-bottom: 2px solid var(--blue);
  }

  &.input-error {
    color: var(--red);
  }

  &.input-error::after {
    animation: ${animation} 1s forwards;
  }

  &.input-error::after {
    border-bottom: 2px solid var(--red);
  }
`;

export const Input = styled.input.attrs({
  onFocus: (e) => {
    e.target.parentElement?.classList.add("label-focus");
  },
  onBlur: (e) => {
    e.target.parentElement?.classList.remove("label-focus");
  },
})`
  border: 0;

  padding: 1vh 1.5vh;
`;

export const Item = styled.div`
  margin-top: 1.8vh;

  &:first-child {
    margin-top: 0;
  }
`;

export const Error = styled.p`
  color: var(--red);
  margin-top: 1vh !important;
  text-align: initial !important;
`;
