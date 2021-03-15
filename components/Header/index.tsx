import { Box, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { Fragment } from "react";

export const ChatHeader = () => {
  return (
    <Fragment>
      <Typography style={{ fontWeight: 600 }} variant='h5' color='primary'>
        Nombre
      </Typography>
      <Delete />
    </Fragment>
  );
};
