import {makeStyles} from "@mui/styles";
import {convertPixelsToRems} from "utilities/theme";

export const useLandmarkStyles = makeStyles({
    landmarkGrid: {

        "&.MuiGrid-root": {


            marginTop: convertPixelsToRems(25),
            rowGap: convertPixelsToRems(17),
        },
    },
});
