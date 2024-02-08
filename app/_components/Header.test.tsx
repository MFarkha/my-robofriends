import React from "react";
import Header from "./Header";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";

test("expects to render the Header component", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
