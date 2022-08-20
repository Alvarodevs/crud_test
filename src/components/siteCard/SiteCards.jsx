import {
  StyledCard,
  ButtonsContainer,
  DeleteButton,
  EditButton,
  ContentContainer,
  Paragraph,
} from "./StyledCard";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteSite, getLastSite } from "../../services/sites";
import { addSiteState, deleteSiteState } from "../../features/sites/siteSlice";
import { APP_STATE } from "../../utils/constants";
import { useState, useEffect } from "react";
import Spinner from "../spinner";
import Error from "../error";

const SiteCards = () => {
  const [appState, setAppState] = useState(APP_STATE.INIT);
  const sitesState = useSelector((state) => state.sites[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    setAppState(APP_STATE.LOADING);
    getLastSite()
      .then((last) => {
        return setAppState(APP_STATE.OK), dispatch(addSiteState(last));
      })
      .catch((err) => {
        setAppState(APP_STATE.KO);
        console.log(err);
      });
  }, []);

  const handleDelete = (_id, v) => {
    deleteSite(_id);
    dispatch(deleteSiteState({ _id, v }));
    return true;
  };

  return (
    <>
      {appState === "loading" && <Spinner />}

      {appState === "ok" &&
        sitesState.map((site) => (
          <StyledCard key={site._id}>
            <ButtonsContainer className="buttons-container">
              <Link to={`site/${site._id}`}>
                <EditButton>
                  <EditOutlinedIcon color="warning" />
                </EditButton>
              </Link>
              <DeleteButton onClick={() => handleDelete(site._id, site.__v)}>
                <DeleteOutlineSharpIcon color="error" />
              </DeleteButton>
            </ButtonsContainer>
            <ContentContainer>
              <Link to={`site/${site._id}`}>
                <h4>{site.name}</h4>
                <Paragraph>{site.description}</Paragraph>
                <p>Path:</p>
                <Paragraph truncate>{site.publicPath}</Paragraph>
              </Link>
            </ContentContainer>
          </StyledCard>
        ))}

      {appState === "ko" && <Error />}
    </>
  );
};

export default SiteCards;
