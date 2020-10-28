import React from "react";
import { render } from "@testing-library/react";
import BoxForm from "./BoxForm";

it("renders without crashing", function() {
  render(<BoxForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
