import React, { useState, useEffect } from "react";
import {
  ListItem,
  makeStyles,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import { FixedSizeList } from "react-window";
import { getPhotos } from "../../api";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 800,
    backgroundColor: theme.palette.background.paper
  }
}));

function Row(props) {
  const { index, style, data } = props;
  const row = data[index];

  return (
    <ListItem button style={style} key={index}>
      <ListItemAvatar>
        <Avatar alt={row.title} src={row.thumbnailUrl} />
      </ListItemAvatar>
      <ListItemText primary={row.title} />
    </ListItem>
  );
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getPhotos()
      .then(setPhotos)
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>Photos</h1>
      <div className={classes.root}>
        <FixedSizeList
          height={800}
          width="100%"
          itemSize={52}
          itemData={photos}
          itemCount={photos.length}
        >
          {Row}
        </FixedSizeList>
      </div>
    </div>
  );
}
