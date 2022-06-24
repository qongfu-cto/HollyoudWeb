import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";
import {mediaQueries} from "utilities/designSystem";


export const useMarketPlaceTopCategoriesStylesEN = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        [mediaQueries.small]: {
            width: "auto",
            minWidth: 90
        },

    },
    iconContainer: {
        width: 64,
        height: 64,
        // backgroundColor: Branding.Colors.black[100] + ' !important',
        boxShadow: ` 0px 1px 2.5px  gray`,
        border: '1px solid rgb(255,255,255)',
    }
});
