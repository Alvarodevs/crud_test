import {
  FormContainer,
  StyledForm,
  SubmitButtonContainer,
  CloseButtonContainer,
} from "./StyledForm";
import React, { useId } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";

const SiteForm = () => {
  const newId = useId();
  const { id } = useParams();
  const creationDate = new Date().toISOString();
  
  return (
    <div>
      <FormContainer>
        <StyledForm>
          <CloseButtonContainer>
            <CloseIcon color="error" style={{ cursor: "pointer" }} />
          </CloseButtonContainer>
          <Formik
            initialValues={{
              _id: newId,
              name: `${id} ? "" : John Doe`,
              path: `${id} ? "" : ""`,
              publicPath: `${id} ? "" : ""`,
              key: `${id} ? "" : ""`,
              description: `${id} ? "" : ""`,
              site: `${id} ? "" : ""`,
              createDate: creationDate,
              __v: 0,
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  id="path"
                  name="path"
                  label="Path"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  id="publicPath"
                  name="publicPath"
                  label="Public path"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  id="key"
                  name="key"
                  label="Key"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  id="site"
                  name="site"
                  label="Site"
                  onChange={handleChange}
                />

                <SubmitButtonContainer>
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </SubmitButtonContainer>
              </form>
            )}
          </Formik>
        </StyledForm>
      </FormContainer>
    </div>
  );
};

export default SiteForm;
