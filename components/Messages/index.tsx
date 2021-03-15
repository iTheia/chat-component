import { Box } from "@material-ui/core";
import React, { Fragment } from "react";
import { dummyArray } from "../../../../util";
import { Message } from "./Message";

export const ChatMessages: React.FC = () => {
  return (
    <Fragment>
      {dummyArray(15).map((item) => (
        <Message />
      ))}
    </Fragment>
  );
};
