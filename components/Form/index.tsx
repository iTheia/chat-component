import React from "react";
import { AttachFile } from "@material-ui/icons";
import { Formik } from "formik";
import { TextField, useTheme } from "@material-ui/core";
import { useStyles } from "./style";
const initialValues = {};

export const ChatForm = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  function handleSubmit() {}
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <form className={classes.form}>
          <AttachFile color='primary' fontSize='large' />
          <TextField
            variant='outlined'
            placeholder='Escribe un mensaje'
            className={classes.input}
          />
          <button className={classes.button} type='submit' disabled={true}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
