import {
    FormContainer,
    StyledForm,
    SubmitButtonContainer,
    CloseButtonContainer,
  } from "./StyledForm";
  import React, { useState, useId, useEffect } from "react";
  import { Formik } from "formik";
  import * as yup from "yup";
  import Button from "@material-ui/core/Button";
  import TextField from "@material-ui/core/TextField";
  import CloseIcon from "@mui/icons-material/Close";
  import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
  import { postSite, getAllSites, getSingleSite } from "../../services/sites";
  import { addSiteState, initSites } from "../../features/sites/siteSlice";
  import { useDispatch } from "react-redux";
  
  const SiteForm = () => {
    const [siteData, setSiteData] = useState({
      name: "",
      path: "",
      publicPath: "",
      key: "",
      description: "",
      site: "",
    });
    
    const newId = useId();
    
    const { id } = useParams();
    //console.log(id)
  
    // useEffect(() => {
    //   getSingleSite(id).then((data) => {
    //     setSiteData({
    //       ...siteData, 
    //       data
    //     })
    //   })
    // }, [!id])
  
  
    const navigate = useNavigate();
    
    const creationDate = new Date().toISOString();
    const dispatch = useDispatch();
  
    
    
  
    const handleChange = (e) => {
      setSiteData({
        _id: newId,
        ...siteData,
        [e.target.name]: e.target.value,
        createDate: creationDate,
        __v: 0,
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      postSite(siteData)
      dispatch(addSiteState(siteData))
      navigate("/")
    }
  
    return (
      <div>
        <FormContainer>
          <StyledForm>
            <CloseButtonContainer>
              <Link to={"/"}>
                <CloseIcon color="error" style={{ cursor: "pointer" }} />
              </Link>
            </CloseButtonContainer>
            {/* <Formik
              initialValues={{
                _id: newId,
                name: id ? siteData.name : 'John Doe',
                path: id ? siteData.path : "Path",
                publicPath: id ? siteData.publicPath : "Public path",
                key: id ? siteData.key : "Key",
                description: id ? siteData.description : "Description",
                site: id ? siteData.site : "Site",
                createDate: creationDate,
                __v: 0,
              }}
              onSubmit={(values) => {
                dispatch(addSiteState({
                  ...values
                }));
                postSite(values);
              }}
            >
              {({ handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    onChange={!siteData.name ? handleChange : setSiteData({name: value})}
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
                    <Link to="/">
                      <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                      >
                        
                        Submit
                        
                      </Button>
                    </Link>
                  </SubmitButtonContainer>
                </form>
              )}
            </Formik> */}
            <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    required
                    id="name"
                    name="name"
                    label="Name"
                    value={siteData.value}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    required
                    id="path"
                    name="path"
                    label="Path"
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    required
                    id="publicPath"
                    name="publicPath"
                    label="Public path"
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    required
                    id="key"
                    name="key"
                    label="Key"
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    required
                    id="description"
                    name="description"
                    label="Description"
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    required
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
  
          </StyledForm>
        </FormContainer>
      </div>
    );
  };
  
  export default SiteForm;
  