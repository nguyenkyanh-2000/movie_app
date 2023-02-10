import React from "react";
import { ListItem, Box } from "@mui/material";
import { ListItemText } from "@mui/material";
import { BASE_IMAGE_URL } from "../../app/config";

export const CastListColumn = (props) => {
  const { index, style } = props;
  const currentActor = props.data.castData[index];
  return (
    <ListItem component="div" key={index} style={style}>
      <Box width="70px" height="100px">
        <img
          src={
            currentActor.profile_path
              ? `${BASE_IMAGE_URL}/original/${currentActor.profile_path}`
              : `no_image_available.jpg`
          }
          alt=""
          width={"100%"}
          height={"100%"}
        ></img>
      </Box>
      <ListItemText
        primary={`${currentActor.name}`}
        secondary={`${currentActor.character}`}
      />
    </ListItem>
  );
};
