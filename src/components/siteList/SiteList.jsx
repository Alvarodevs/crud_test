import { Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSiteState } from "../../features/sites/siteSlice";
import { getLastSite } from "../../services/sites";
import SiteCards from "../siteCard";
import Spinner from "../spinner";
import { ListContainer, StyledList, Title } from "./StyledList";


const SiteList = () => {
    
  return (
    <div>
      <Title>Sites creator</Title>
      <ListContainer className="list-container">
        <StyledList>
            <SiteCards></SiteCards>
        </StyledList>
      </ListContainer>
    </div>
  );
};

export default SiteList;