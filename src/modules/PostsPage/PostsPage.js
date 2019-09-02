import React, { useState, useEffect } from "react";
import { getPosts } from "../../api";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export default function PostsPage() {
  const [state, setState] = useState({ posts: [], loading: false });

  useEffect(() => {
    setState({ loading: true, posts: [] });
    getPosts()
      .then(posts => setState({ loading: false, posts }))
      .catch(err => {
        console.error(err);
        setState({ loading: false, posts: [] });
      });
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <List>
        {state.loading
          ? Array(20)
              .fill(null)
              .map((_, idx) => (
                <ListItem key={idx} divider>
                  <div className="w-100">
                    <Skeleton height={6} width="80%" />
                    <Skeleton height={6} width="100%" />
                  </div>
                </ListItem>
              ))
          : state.posts.map(post => {
              return (
                <ListItem key={post.id} divider>
                  <ListItemText primary={post.title} secondary={post.body} />
                </ListItem>
              );
            })}
      </List>
    </div>
  );
}
