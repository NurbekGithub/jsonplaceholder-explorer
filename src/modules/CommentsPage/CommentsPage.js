import React, { useState, useEffect } from "react";
import { getComments } from "../../api";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments()
      .then(setComments)
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      <List>
        {comments.map(comment => {
          return (
            <ListItem key={comment.id} divider>
              <ListItemText
                primary={comment.name}
                secondary={`User: ${comment.email}`}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
