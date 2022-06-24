import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const useAvatarWithStatusStylesEN = makeStyles({
    avatarStatusWrapper: {
        position: 'relative',
        width: 'auto',
        height: 'auto'
    },
    status: {
        position: 'absolute',
        border: `1px solid ${Branding.Colors.white}`,
        width: 12,
        height: 12,
        borderRadius: 6,
        right: 4,
        bottom: 2
    }
});
