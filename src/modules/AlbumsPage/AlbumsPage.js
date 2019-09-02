import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { getAlbums } from "../../api";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums()
      .then(setAlbums)
      .catch(console.error);
  }, []);
  return (
    <div>
      <Typography variant="h2">Albums</Typography>
      <List>
        {albums.map(album => {
          return (
            <ListItem key={album.id} divider>
              <ListItemText
                primary={album.title}
                secondary={`User: ${album.userId}`}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
