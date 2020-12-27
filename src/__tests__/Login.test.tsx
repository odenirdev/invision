import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "../pages/Login";

it("renders", () => {
  const { asFragment } = render(<Login />);

  expect(asFragment()).toMatchSnapshot();
});
