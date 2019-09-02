import React, { useState, useEffect } from "react";
import { getTodos } from "../../api";
import {
  CircularProgress,
  ListItem,
  ListItemSecondaryAction,
  Checkbox,
  ListItemText,
  ListItemAvatar,
  Avatar,
  List
} from "@material-ui/core";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTodos()
      .then(setTodos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <CircularProgress />;
  return (
    <div>
      <h1>Todos</h1>
      <List>
        {todos.map(todo => {
          return (
            <ListItem key={todo.id}>
              <ListItemAvatar>
                <Avatar>{todo.userId}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <Checkbox edge="end" checked={todo.completed} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
