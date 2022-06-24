import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";
import {isNullable} from "utilities/value";

export const useButtonStyles = makeStyles({
    outlineButton: {
        "&.MuiButton-root": {
            marginTop: ({
                            marginTop,
                        }: {
                marginTop?: number;
                size: "small" | "medium";
            }) => (isNullable(marginTop) ? 0 : convertPixelsToRems(marginTop!)),
            padding: ({size}) => (size === "small" ? "9px 17px" : "14px 21px"),
            borderRadius: 12,
            borderColor: Branding.Colors.primary.normal,
            "&:hover": {
                borderColor: Branding.Colors.primary.normal,
            },
        },
    },
});
