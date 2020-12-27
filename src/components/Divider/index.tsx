import styled from "styled-components";

interface Props {
  legend: string;
}

export default styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;

  &:before {
    content: "";
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: "${(props: Props) => props.legend}";
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    color: #818078;
    background-color: #fcfcfa;
  }
`;
