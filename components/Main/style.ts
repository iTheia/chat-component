import { makeStyles } from "@material-ui/core";
import { CSSProperties } from "react";

export const HEADER_HEIGHT = 61;
export const FOOTER_HEIGHT = 78;
export const CHAT_STYLES: CSSProperties = {
  display: "flex",
  flexDirection: "column-reverse",
  padding: "0 20px",
};
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: "275px 1fr",
    gridTemplateRows: `${HEADER_HEIGHT}px ${HEADER_HEIGHT}px  1fr ${FOOTER_HEIGHT}px`,
  },
}));
