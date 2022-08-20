import {
  FormContainer,
  StyledForm,
  SubmitButtonContainer,
  CloseButtonContainer,
} from "./StyledSiteForm";
import React, { useState, useId } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { postSite, editSite } from "../../services/sites";
import { editSiteState } from "../../features/sites/siteSlice";
import { useDispatch, useSelector } from "react-redux";
import { APP_STATE } from "../../utils/constants";

const SiteForm = ({ singleSite }) => {
  const [appState, setAppState] = useState(APP_STATE.INIT);
  const [siteData, setSiteData] = useState({
    name: singleSite.name ? singleSite.name : "",
    path: singleSite.path ? singleSite.path : "",
    publicPath: singleSite.publicPath ? singleSite.publicPath : "",
    key: singleSite.key ? singleSite.key : "",
    description: singleSite.description ? singleSite.description : "",
    site: singleSite.site ? singleSite.site : "",
  });

  const sites = useSelector((state) => state.sites[0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newId = useId();
  const creationDate = new Date().toISOString();

  const handleChange = (e) => {
    setSiteData({
      _id: singleSite._id ? singleSite._id : newId,
      ...siteData,
      [e.target.name]: e.target.value,
      createDate: creationDate,
      __v: 0,
    });
  };

  const handleSubmit = (e) => {
    setAppState(APP_STATE.LOADING);
    e.preventDefault();
    
    if (singleSite._id) {
      editSite(singleSite._id, siteData);
      dispatch(editSiteState(siteData));
      setAppState(APP_STATE.OK);
    } else {
      postSite(siteData);
      setAppState(APP_STATE.OK);
    }
    
    navigate("/");
  };

  return (
    <div>
      {appState === 'loading' && <Spinner/>}

      {sites &&
        <FormContainer>
          <StyledForm>
            <CloseButtonContainer>
              <Link to={"/"}>
                <CloseIcon color="error" style={{ cursor: "pointer" }} />
              </Link>
            </CloseButtonContainer>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                id="name"
                name="name"
                label="Name"
                value={siteData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                id="path"
                name="path"
                label="Path"
                value={siteData.path}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                id="publicPath"
                name="publicPath"
                label="Public path"
                value={siteData.publicPath}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                id="key"
                name="key"
                label="Key"
                value={siteData.key}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                id="description"
                name="description"
                label="Description"
                value={siteData.description}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                id="site"
                name="site"
                label="Site"
                value={siteData.site}
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
      }
    </div>
  );
};

export default SiteForm;

SiteForm.propTypes = {
  singleSite: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
    publicPath: PropTypes.string,
    key: PropTypes.string,
    description: PropTypes.string,
    site: PropTypes.string,
    __v: PropTypes.number,
  }),
};
