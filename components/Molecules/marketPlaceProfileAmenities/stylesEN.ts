import {makeStyles} from "@mui/styles";
import {convertPixelsToRems} from "utilities/theme";

export const useAmenitiesStyles = makeStyles({
    amenitiesGrid: {
        "&.MuiGrid-root": {
            marginTop: convertPixelsToRems(30),
            rowGap: convertPixelsToRems(25),
        },
    },

});
