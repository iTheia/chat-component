import { Avatar, Box, Typography } from "@material-ui/core";
import React from "react";

export const ListItem = () => {
  return (
    <Box
      style={{
        borderBottom: `1px solid #003781`,
        padding: "10px 5px",
        display: "grid",
        gridTemplateColumns: "40px 1fr max-content",
        gridGap: "5px",
      }}
    >
      <Avatar
        style={{ gridRow: "span 2" }}
        src='https://picsum.photos/200/300'
      />
      <Typography variant='subtitle1' color='primary'>
        numero de control
      </Typography>
      <Typography variant='subtitle2'>fecha</Typography>
      <Typography
        noWrap={true}
        paragraph
        variant='subtitle2'
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          margin: 0,
          gridColumn: "span 2",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quo
        minus cupiditate pariatur velit quae a illo vero atque. Unde?
      </Typography>
    </Box>
  );
};
