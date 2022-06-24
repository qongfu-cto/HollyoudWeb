import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const useChatLayoutStylesEN = makeStyles({

    icon: {
        position: "fixed",
        bottom: 40,
        right: 40,
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Branding.Colors.secondary.light
    },
});
