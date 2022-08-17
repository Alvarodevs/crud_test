import SiteCard from "../siteCard";
import { ListContainer, StyledList, Title } from "./StyledList";

const SiteList = () => {
  return (
    <div>
      <Title>Sites creator</Title>
      <ListContainer className="list-container">
        <StyledList>
          <SiteCard></SiteCard>
        </StyledList>
      </ListContainer>
    </div>
  );
};

export default SiteList;
