import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../pages/Home";

it("renders", () => {
  const { asFragment } = render(<Home />);

  expect(asFragment()).toMatchSnapshot();
});
