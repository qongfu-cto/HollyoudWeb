import {makeStyles} from "@mui/styles";

export const useSearchNavBarStyles = makeStyles({

    navbar: {
        width: "100%",
        // maxWidth: 1020,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // padding: `0 auto`,
        // margin:`0 auto`,
	
    },
    dropDown: {

        display: "inherit",
        flexDirection: "inherit",
        alignItems: "center"
    },
    icon: {
        width: 25,
        height: 25
    }
});

