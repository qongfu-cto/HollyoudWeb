import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";


export const useTabHeaderStylesEN = makeStyles((props) => ({
        tabs: {
            "&.MuiButtonBase-root.MuiTab-root": {
                color: Branding.Colors.primary.normal
            },
            "&.MuiButtonBase-root.Mui-selected": {
                color: Branding.Colors.primary.dark
            },
            "&.MuiTabs-indicator": {
                color: Branding.Colors.primary.dark
            }
        }
    }
))


