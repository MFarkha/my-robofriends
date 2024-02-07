import Card from "./Card";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

test("expects to render the Card component", () => {
  const mockRobot = {
    id: 1,
    name: "John Snow",
    email: "john@example.com",
  };
  const { container } = render(<Card key={mockRobot.id} robot={mockRobot} />);
  expect(
    screen.getByRole("heading", { level: 2, name: mockRobot.name }),
  ).toBeDefined();
  expect(container).toMatchSnapshot();
});
