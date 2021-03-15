import React from "react";
import { AttachFile } from "@material-ui/icons";
import { Formik } from "formik";
import { TextField } from "@material-ui/core";

const initialValues = {};

export const ChatForm = () => {
  function handleSubmit() {}
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <form
          style={{
            display: "flex",
            padding: "0 45px",
            alignItems: "center",
            borderTop: "1px solid #cfcfcf",
            backgroundColor: "#EEE",
          }}
        >
          <AttachFile color='primary' fontSize='large' />
          <TextField
            variant='outlined'
            placeholder='Escribe un mensaje'
            style={{
              flex: "1 0",
              borderRight: "none",
              borderTopRightRadius: "0",
            }}
          />
          <button
            style={{
              height: "56px",
              flex: "0 0 90px",
              borderRadius: "0 6px 6px 0",
              border: "1px solid #747d8f",
            }}
            type='submit'
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
