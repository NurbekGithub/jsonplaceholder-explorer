import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography className="pl-20 pr-20">
          <Link className="App-link" to="/">
            Home
          </Link>
        </Typography>
        <Typography className="pl-20 pr-20">
          <Link className="App-link" to="/posts">
            posts
          </Link>
        </Typography>
        <Typography className="pl-20 pr-20">
          <Link className="App-link" to="/comments">
            comments
          </Link>
        </Typography>
        <Typography className="pl-20 pr-20">
          <Link className="App-link" to="/albums">
            albums
          </Link>
        </Typography>
        <Typography className="pl-20 pr-20">
          <Link className="App-link" to="/photos">
            photos
          </Link>
        </Typography>
        <Typography className="pl-20 pr-20">
          <Link className="App-link" to="/todos">
            todos
          </Link>
        </Typography>
        <Typography className="pl-20 pr-20">
          <Link className="App-link" to="/users">
            users
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
