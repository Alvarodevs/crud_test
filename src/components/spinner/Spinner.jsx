import { SpinnerContainer } from "./StyledSpinner";
import { CircularProgress } from "@mui/material";

const Spinner = () => {

    return (
        <SpinnerContainer>
            <CircularProgress style={{color: "white"}}/>
        </SpinnerContainer>
    )
}

export default Spinner;