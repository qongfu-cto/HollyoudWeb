import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const useOnBoardingInterestModalStylesEN = makeStyles(() => ({
    container: {
        backgroundColor: Branding.Colors.black[6],
        height: 300,
        width: "100%",
        overflowY: "scroll",
        paddingBottom: 10,
        boxShadow: `0 1px 10px 0 rgba(0, 0, 0, 0.2) inset`,
    },

    headerContainer: {
        padding: 24,

        borderBottom: `1px solid rgba(0, 0, 0, 0.2)`
    },
    buttonContainer: {
        padding: 30,
        borderTop: `1px solid rgba(0, 0, 0, 0.16)`
    },
}));
