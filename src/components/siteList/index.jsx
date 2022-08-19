import SiteCards from "../siteCard";
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
