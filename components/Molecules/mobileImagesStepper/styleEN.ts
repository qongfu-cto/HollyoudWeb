import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const useMobileImageSteppersStyles = makeStyles({
    container: {
        //   maxWidth: 400,
        flexGrow: 1,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column'
    },
    stepper: {

        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
    },
    avatar: {
        // width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    avatarContainer: {
        width: 88,
        height: 88,
        borderRadius: 50,
        position: "absolute",
        //  border: "1px solid #FAFAFA",
        top: 16,
        left: 16
    },
    dot: {
        "&.MuiMobileStepper-dot": {
            backgroundColor: Branding.Colors.black[16],

        },
        "&.MuiMobileStepper-dotActive": {
            backgroundColor: Branding.Colors.primary.normal,
        }
    }
})

