import React from "react";
import Scroll from "./Scroll";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";

test("expects to render the Scroll component", () => {
  const { container } = render(<Scroll />);
  expect(container).toMatchSnapshot();
});
