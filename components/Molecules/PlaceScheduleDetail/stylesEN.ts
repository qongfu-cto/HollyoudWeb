import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";

export const usePlaceScheduleStyles = makeStyles({
    placeScheduleGrid: {
        "&.MuiGrid-root": {
            marginTop: convertPixelsToRems(25),
            rowGap: convertPixelsToRems(17),
        },
    },
    placeScheduleDetailItem: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: convertPixelsToRems(10),
    },
    placeScheduleDetailDay: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[86],
            fontSize: convertPixelsToRems(18),
            lineHeight: convertPixelsToRems(23),
            letterSpacing: 0,
            fontFamily: "Outfit",
            fontWeight: 500,
            minWidth: convertPixelsToRems(100),
        },
    },
    placeScheduleDetailStatus: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[60],
            fontSize: convertPixelsToRems(18),
           lineHeight: convertPixelsToRems(24),
            letterSpacing: 0,
            fontFamily: "Roboto",
            fontWeight: 400,
        },
    },
    placeScheduleDetailToday: {
        "&.MuiTypography-root": {
            color: "#5fb948",
        },
    },
    placeScheduleDetailDayClosed: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[60],
        },
    },
    placeScheduleDetailStatusClosed: {
        "&.MuiTypography-root": {
            color: Branding.Colors.danger.normal,
        },
    },
});
