import React from "react";
import SearchBox from "./SearchBox";
import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";

test("expects to render the SearchBox component", () => {
  const mockSearchChange = vi.fn();
  const { container } = render(<SearchBox searchChange={mockSearchChange} />);
  expect(container).toMatchSnapshot();
});
