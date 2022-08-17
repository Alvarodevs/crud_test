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
import { useSelector } from "react-redux";

const SiteCard = () => {
  const sites = useSelector((state) => state.sites[0]);
  console.log("SITES", sites);

  return (
    <>
      {sites &&
        sites.map((site) => (
          <StyledCard key={site.id}>
            <ButtonsContainer className="buttons-container">
              <Link to={"/edit_site"}>
                <EditButton>
                  <EditOutlinedIcon color="warning"/>
                </EditButton>
              </Link>
              <DeleteButton>
                <DeleteOutlineSharpIcon color="error" />
              </DeleteButton>
            </ButtonsContainer>
            <ContentContainer>
              <h4>{site.name}</h4>
              <Paragraph>{site.description}</Paragraph>
              <p>Path:</p>
              <Paragraph truncate>{site.publicPath}</Paragraph>
            </ContentContainer>
          </StyledCard>
        ))}
    </>
  );
};

export default SiteCard;
