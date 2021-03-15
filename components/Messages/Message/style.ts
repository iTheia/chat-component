import { makeStyles } from "@material-ui/core";

interface Props {
  isMine: boolean;
}

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "70%",
    marginBottom: "20px",
  },
  text: {},
}));
