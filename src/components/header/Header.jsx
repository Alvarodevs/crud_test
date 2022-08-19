import {
    StyledHeader,
    HeaderTitle,
    AddSiteContainer,
    AddSiteParagraph,
    AddButton,
  } from "../header/StyledHeader";
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  import { Link } from "react-router-dom";
  
  const Header = () => {
    return (
      <div>
        <StyledHeader>
          <Link to={"/"}>
            <HeaderTitle>Sites</HeaderTitle>
          </Link>
          <AddSiteContainer>
            <Link to={"/create_site"}>
              <AddButton>
                <AddCircleIcon/>
              </AddButton>
            </Link>
  
            <AddSiteParagraph>Create your site</AddSiteParagraph>
          </AddSiteContainer>
        </StyledHeader>
      </div>
    );
  };
  
  export default Header;