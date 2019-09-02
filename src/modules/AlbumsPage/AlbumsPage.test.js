import React from "react";
import { render, cleanup, wait } from "@testing-library/react";
import AlbumsPage from "./AlbumsPage";
import { getAlbums } from "../../api/albumsApi";
jest.mock("../../api/albumsApi");

afterEach(cleanup);

describe("<AlbumsPage />", () => {
  beforeEach(() => {
    getAlbums.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: "quidem molestiae enim"
      }
    ]);
  });
  it("makes request on load and displays data properly", async () => {
    const { getByText } = render(<AlbumsPage />);

    await wait();

    getByText("quidem molestiae enim");
  });
});
