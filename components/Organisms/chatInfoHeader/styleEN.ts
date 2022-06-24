import {Branding} from "../../../utilities/branding";
import {makeStyles} from "@mui/styles";

export const useChatInfoHeaderStylesEN = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: Branding.Colors.white
    },
    searchIcon: {
        position: 'absolute',
        right: 0,
        width: 40,
        height: 40
    }
});
