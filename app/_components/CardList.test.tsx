import React from "react";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import CardList from "./CardList";

test("expects to render the CardList component", () => {
  const mockRobots = [
    {
      key: 10,
      id: 1,
      name: "John Snow",
      email: "john@example.com",
    },
    {
      key: 11,
      id: 2,
      name: "Kelly Gale",
      email: "kelly@example.com",
    },
  ];
  const { container } = render(<CardList error="" robots={mockRobots} />);
  expect(container).toMatchSnapshot();
});
