import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";
import {Theme, ThemeOptions} from "@mui/material";

export const useMessageViewStylesEN = makeStyles<Theme, { backgroundColor: string | undefined, align: any, seen: boolean }>((theme: ThemeOptions) => ({
    container: {
        display: 'flex',
        margin: '16px 20px',
        justifyContent: ({align}) => align === 'left' ? 'flex-start' : 'flex-end'
    },
    message: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 10px',
        borderRadius: 12,
        backgroundColor: ({backgroundColor}) => backgroundColor,
        maxWidth: '80%',
        width: 'auto',
        textAlign: ({align}) => align ?? 'left'
    },
    time: {
        display: 'flex',
        marginTop: 6,
        justifyContent: ({align}) => align === 'left' ? 'flex-start' : 'flex-end'
    },
    seenIcon: {
        display: 'flex',
        width: 12,
        height: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
        borderRadius: 6,
        alignSelf: 'flex-end',
        backgroundColor: ({seen}) => seen ? Branding.Colors.green.variant_2 : Branding.Colors.black["36"]
    }
}));
