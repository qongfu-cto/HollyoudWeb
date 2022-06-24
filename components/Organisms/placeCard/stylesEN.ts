import {makeStyles} from "@mui/styles";


export const usePlaceCardStylesEN = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",

        width: "100%",


    },
    title: {
        "&.MuiTypography-root": {
            fontWeight: "bold"
        }

    }
});
