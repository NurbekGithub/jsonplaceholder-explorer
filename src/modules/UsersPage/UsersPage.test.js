import React from "react";
import { render, cleanup, wait } from "@testing-library/react";
import UsersPage from "./UsersPage";
import { getUsers } from "../../api";
jest.mock("../../api");

afterEach(cleanup);

describe("<UsersPage />", () => {
  beforeEach(() => {
    getUsers.mockResolvedValue([
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
    ]);
  });
  it("makes request on load and displays data properly", async () => {
    const { getByText } = render(<UsersPage />);

    await wait();

    getByText("Leanne Graham");
  });
});
