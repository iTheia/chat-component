import { Avatar, Box, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { dummyArray } from "../../../../util";
import { ListItem } from "./Item";

export const ChatList = () => {
  return (
    <Fragment>
      {dummyArray(20).map(() => (
        <ListItem />
      ))}
    </Fragment>
  );
};
