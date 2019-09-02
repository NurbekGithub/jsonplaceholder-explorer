import React from "react";
import { Typography } from "@material-ui/core";

export default function HomePage() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Welcome to jsonplaceholder explorer app which was written using React
        and tdd aproach by{" "}
        <a href="https://github.com/NurbekGithub">Nurbek Izbassar</a>
      </Typography>
      <Typography variant="h4" align="center">
        <a href="https://github.com/NurbekGithub/jsonplaceholder-explorer">
          Checkout source
        </a>
      </Typography>
    </div>
  );
}
