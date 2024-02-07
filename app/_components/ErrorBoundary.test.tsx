import ErrorBoundary from "./ErrorBoundary";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

test("should display an ErrorMessage if wrapped component throws an error", () => {
  vi.spyOn(console, "log").mockImplementation(() => null);
  vi.spyOn(console, "error").mockImplementation(() => null);
  const ErrorComponent = () => {
    throw new Error("test error");
  };
  const { container } = render(
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>,
  );
  expect(screen.getByText(/Something weird happened/i)).toBeDefined();
  expect(container).toMatchSnapshot();
});
