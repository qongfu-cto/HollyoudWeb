import {makeStyles} from "@mui/styles";
import {SxProps} from "@mui/system";
import {Branding} from "utilities/branding";
import {
    FilterSectionStylesProps
  } from 'components/Molecules/filterDialog/types';

const commonSelectorValueStyles: SxProps = {
    fontSize: 18,
    lineHeight: "23px",
    letterSpacing: "0.17px",
    width: 32,
    textAlign: "center",
};

export const useFilterSectionStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: ({vertical}: FilterSectionStylesProps) =>
            vertical ? "column" : "row",
        alignItems: ({vertical}) => (vertical ? "flex-start" : "center"),
        columnGap: 16,
        rowGap: 11,
        padding: "16px 0",
        borderBottom: `1px solid ${Branding.Colors.black[16]}`,
        "&:last-of-type": {
            borderBottom: "none",
        },
        // overflowY: "scroll",

    },
    button: {
        "&.MuiButton-root": {
            borderRadius: 12,
            borderColor: Branding.Colors.primary.normal,
            color: Branding.Colors.primary.normal,
            fontSize: 16,
            lineHeight: "20px",
            fontFamily: "Outfit",
            textTransform: "none",
            letterSpacing: "0.15px",
            height: 40,
            "&:hover": {borderColor: Branding.Colors.primary.normal},
        },
        "&.MuiButton-contained": {
            backgroundColor: Branding.Colors.primary.normal,
            color: Branding.Colors.white,
            "&:hover": {backgroundColor: Branding.Colors.primary.normal},
            "& .MuiButton-startIcon": {
                color: "red",
            },
        },
    },
    description: {minWidth: 176, maxWidth: 176},
    subdescription: {minWidth: 160, maxWidth: 160},
    title: {
        color: Branding.Colors.primary.dark,
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "25px",
        letterSpacing: "0.19px",
    },
    subtitle: {
        width: 176,
        color: Branding.Colors.black[60],
        fontSize: 16,
        lineHeight: "20px",
        letterSpacing: "0.15px",
    },
    filters: {
        display: "flex",
        position: "relative",
        flexDirection: ({vertical}) => (vertical ? "column" : "row"),
        flexGrow: 1,
        columnGap: 16,
        rowGap: 8,
        paddingLeft: ({vertical}) => (vertical ? 16 : 0),
    },
    selector: {display: "flex", columnGap: 16, alignItems: "center"},
    selectorIcon: {
        "&.MuiIconButton-root": {
            fontSize: 22,
            color: Branding.Colors.primary.normal,
            "&.MuiIconButton-colorPrimary": {
                color: Branding.Colors.primary.normal,
            },
            "&.Mui-disabled": {
                color: Branding.Colors.black[16],
            },
        },
    },
    selectorValue: {
        color: Branding.Colors.black[86],
        "&": {...commonSelectorValueStyles},
    },
    selectorValueDisabled: {
        color: Branding.Colors.black[36],
        "&": {...commonSelectorValueStyles},
    },
    checkboxLabel: {
        "&.MuiFormControlLabel-root": {
            color: Branding.Colors.black[60],
            fontSize: 16,
            lineHeight: "20px",
            fontFamily: "Outfit",
            letterSpacing: "0.15px",
            "& .Mui-checked + .MuiFormControlLabel-label": {
                color: Branding.Colors.primary.normal,
            },
        },
    },
    dropdownButton: {
        "&.MuiButton-root,&.MuiButton-outlined": {
            flexGrow: 1,
            justifyContent: "space-between",
            borderRadius: 12,
            backgroundColor: Branding.Colors.offWhite,
            borderColor: Branding.Colors.black[16],
            color: Branding.Colors.black[36],
            fontSize: 16,
            lineHeight: "19px",
            textTransform: "none",
            letterSpacing: "-0.38px;",
            height: 40,
            "&:hover": {borderColor: Branding.Colors.black[16]},
            "& .MuiButton-endIcon": {
                color: Branding.Colors.primary.normal,
            },
        },
    },
});
