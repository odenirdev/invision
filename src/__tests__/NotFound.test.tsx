import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import NotFound from "../pages/NotFound";

it("renders", () => {
  const { asFragment } = render(<NotFound />);

  expect(asFragment()).toMatchSnapshot();
});
