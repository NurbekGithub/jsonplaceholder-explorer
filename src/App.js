import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { CssBaseline, LinearProgress } from "@material-ui/core";
import HomePage from "./modules/HomePage";
import PostsPage from "./modules/PostsPage";
import CommentsPage from "./modules/CommentsPage";
import AlbumsPage from "./modules/AlbumsPage";
import PhotosPage from "./modules/PhotosPage";
import TodosPage from "./modules/TodosPage";
import UsersPage from "./modules/UsersPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ marginTop: "64px" }}>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/comments" component={CommentsPage} />
            <Route exact path="/albums" component={AlbumsPage} />
            <Route exact path="/photos" component={PhotosPage} />
            <Route exact path="/todos" component={TodosPage} />
            <Route exact path="/users" component={UsersPage} />
          </Switch>
        </Suspense>
      </main>
      <CssBaseline />
    </div>
  );
}

export default App;
