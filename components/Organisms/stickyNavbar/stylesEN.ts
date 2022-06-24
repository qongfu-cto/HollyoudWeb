import {makeStyles} from "@mui/styles";
import {convertPixelsToRems} from "utilities/theme";
import {Branding} from "utilities/branding";
import {StickyNavbarProps} from "./types";

export const useNavigationBarStyles = makeStyles({
    container: {
        // display: "flex",
        // flexDirection:"row",
        // alignItems: "center",
        // justifyContent: (props: StickyNavbarProps) =>
        //     props?.hasLogo ? "space-between" : "flex-end",
        // padding: `${convertPixelsToRems(10)} ${convertPixelsToRems(24)}`,
        // border: (props: StickyNavbarProps) =>
        //     `solid 1px ${props?.hasLogo ? Branding.Colors.black[16] : "transparent"}`,
        gap: "1.75rem",
        width: "100%",
        height: 80,
        top: 0,
        zIndex: 2,
        background: "#FFFFFF 0% 0% no-repeat padding-box",

        // boxShadow:` 0px 2px 4px  gray`
    },
    brandContainer: {
        height: convertPixelsToRems(48),
        width: convertPixelsToRems(203),
    },
    dynamicContent: {
        flex: 1,
        display: "flex",
        gap: 16,
        alignItems: "center",
    },
});
// export const useMobileNavigationBarStyles = makeStyles({
//     mobileContainer: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: (props: StickyNavbarProps) =>
//             props?.hasLogo ? "space-between" : "flex-end",
//         padding: `${convertPixelsToRems(10)} ${convertPixelsToRems(6)}`,
//         border: (props: StickyNavbarProps) =>
//             `solid 1px ${props?.hasLogo ? Branding.Colors.black[16] : "transparent"}`,
//         position: "sticky",
//         width: "100%",
//         height: 80,
//         top: 0,
//         zIndex: 2,
//         background: "#FFFFFF 0% 0% no-repeat padding-box",
//         boxShadow: ` 0px 2px 4px  gray`
//     },
//     mobileBrandContainer: {
//         height: 60,
//         width: 60
//     },

//     mobileImage: {
//         width: 60,
//         height: 60
//     }
// });
