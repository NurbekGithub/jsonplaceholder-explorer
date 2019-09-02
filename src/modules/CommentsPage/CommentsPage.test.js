import React from "react";
import { render, cleanup, wait } from "@testing-library/react";
import CommentsPage from "./CommentsPage";
import { getComments } from "../../api";
jest.mock("../../api");

afterEach(cleanup);

describe("<CommentsPage />", () => {
  beforeEach(() => {
    getComments.mockResolvedValue([
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body:
          "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      }
    ]);
  });
  it("makes request on load and displays data properly", async () => {
    const { getByText } = render(<CommentsPage />);

    await wait();

    getByText("id labore ex et quam laborum");
  });
});
