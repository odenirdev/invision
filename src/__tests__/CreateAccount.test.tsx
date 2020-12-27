import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CreateAccount from "../pages/CreateAccount";

it("renders", () => {
  const { asFragment } = render(<CreateAccount />);

  expect(asFragment()).toMatchSnapshot();
});
