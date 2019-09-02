import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { MemoryRouter } from "react-router-dom";

it("renders without crashing with react-router wrapper", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Suspense fallback="loading...">
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Suspense>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
