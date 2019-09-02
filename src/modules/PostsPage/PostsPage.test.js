import React from "react";
import { render, cleanup, wait } from "@testing-library/react";
import PostsPage from "./PostsPage";
import { getPosts } from "../../api";
jest.mock("../../api");

afterEach(cleanup);

describe("<PostsPage />", () => {
  beforeEach(() => {
    getPosts.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ]);
  });
  it("makes request on load and displays data properly", async () => {
    const { getByText } = render(<PostsPage />);

    await wait();

    getByText(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });
});
