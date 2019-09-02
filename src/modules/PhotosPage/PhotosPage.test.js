import React from "react";
import { render, cleanup, wait } from "@testing-library/react";
import PhotosPage from "./PhotosPage";
import { getPhotos } from "../../api";
jest.mock("../../api");

afterEach(cleanup);

describe("<PhotosPage />", () => {
  beforeEach(() => {
    getPhotos.mockResolvedValue([
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      }
    ]);
  });
  it("makes request on load and displays data properly", async () => {
    const { getByText } = render(<PhotosPage />);

    await wait();

    getByText("accusamus beatae ad facilis cum similique qui sunt");
  });
});
