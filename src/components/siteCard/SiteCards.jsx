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
  import { Link, useParams } from "react-router-dom";
  import { useSelector, useDispatch } from "react-redux";
  import { getSingleSite, deleteSite } from "../../services/sites";
  import {deleteSiteState} from '../../features/sites/siteSlice';
  import { useEffect } from "react";
  
  const SiteCards = () => {
    const sites = useSelector((state) => state.sites[0]);
    const dispatch = useDispatch();
    
  
    const handleDelete = (_id, v) => {
      deleteSite(_id);
      dispatch(deleteSiteState({_id, v})) 
      return true
    }
  
    return (
      <>
        {sites &&
          sites.map((site) => (
            <StyledCard key={site._id}>
              <ButtonsContainer className="buttons-container">
                <Link to={`edit_site/${site._id}`}>
                  <EditButton>
                    <EditOutlinedIcon color="warning"/>
                  </EditButton>
                </Link>
                <DeleteButton onClick={() => handleDelete(site._id, site.__v)}>
                  <DeleteOutlineSharpIcon color="error" />
                </DeleteButton>
              </ButtonsContainer>
              <ContentContainer>
                <Link to={`/${site._id}`}>
                  <h4 >{site.name}</h4>
                  <Paragraph>{site.description}</Paragraph>
                  <p>Path:</p>
                  <Paragraph truncate>{site.publicPath}</Paragraph>
                </Link>  
              </ContentContainer>
            </StyledCard>
          ))}
      </>
    );
  };
  
  export default SiteCards;
  