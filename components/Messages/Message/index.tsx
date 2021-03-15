import { Box, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  content: string;
  date: string;
  isMine: boolean;
}

export const Message: React.FC = () => {
  return (
    <Box style={{}}>
      <Box style={{}}>
        <Typography>texto</Typography>
        <Typography>fecha</Typography>
      </Box>
    </Box>
  );
};
