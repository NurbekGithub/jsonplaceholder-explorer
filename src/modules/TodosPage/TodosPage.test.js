import React from "react";
import { render, cleanup, wait } from "@testing-library/react";
import TodosPage from "./TodosPage";
import { getTodos } from "../../api";
jest.mock("../../api");

afterEach(cleanup);

describe("<TodosPage />", () => {
  beforeEach(() => {
    getTodos.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      }
    ]);
  });
  it("makes request on load and displays data properly", async () => {
    const { getByText } = render(<TodosPage />);

    await wait();

    getByText("delectus aut autem");
  });
});
