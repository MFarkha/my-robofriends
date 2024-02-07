import Page from "./page";
import { expect, test } from "vitest";
import { beforeAll, afterEach, afterAll } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      {
        name: "John Snow",
        id: "1",
        email: "john@company.com",
      },
      {
        name: "Kathelyn Snow",
        id: "2",
        email: "kate@company.com",
      },
    ]);
  }),
];

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterEach(cleanup);
afterAll(() => server.close());

test("expects to render the Page component", async () => {
  const { container } = render(<Page />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  expect(container).toMatchSnapshot();
});

test("expects to search a robot", async () => {
  const { container } = render(<Page />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  await userEvent.type(
    screen.getByRole("searchbox", { name: /search/i }),
    "Kathelyn{enter}",
  );
  expect(container).toMatchSnapshot();
});
