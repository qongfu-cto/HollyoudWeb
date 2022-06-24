import {makeStyles} from "@mui/styles";
import {RatingProps, Sizes} from "../../../utilities/interface";
import {CSSProperties} from "react";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";
import {mediaQueries} from "utilities/designSystem";

export type UserRatingReviewsStylesProps = Pick<RatingProps, "size"> & {
    ratingColor?: string;
    totalReviewColor?: string;
};

const ratingSizes: Record<Sizes,
    Record<keyof Pick<CSSProperties, "fontSize" | "lineHeight">, number>> = {
    large: {fontSize: 20, lineHeight: 32},
    medium: {fontSize: 18, lineHeight: 23},
    small: {fontSize: 12, lineHeight: 15},
};
const totalReviewSizes: Record<Sizes,
    Record<keyof Pick<CSSProperties, "fontSize" | "lineHeight">, number>> = {
    large: {fontSize: 20, lineHeight: 29},
    medium: {fontSize: 14, lineHeight: 18},
    small: {fontSize: 12, lineHeight: 15},
};

export const useUserRatingReviewsStyles = makeStyles({
    details: {
        display: "flex",
        alignItems: "center",
        columnGap: convertPixelsToRems(8),
        [mediaQueries.small]:{
            columnGap: 0
        }
    },
    rating: {
        "&.MuiTypography-root": {

            fontWeight: 500,
            fontSize: ({size}: UserRatingReviewsStylesProps) =>
                convertPixelsToRems(ratingSizes[size].fontSize),
            lineHeight: ({size}) =>
                convertPixelsToRems(ratingSizes[size].lineHeight),
            fontFamily: "Roboto",
            letterSpacing: 0,
            color: ({ratingColor}) =>
                Boolean(ratingColor) ? ratingColor : Branding.Colors.black[86],
            backgroundColor: "transparent"
        },
    },
    totalReviews: {
      //  marginLeft: 16,
        width: 150,
        "&.MuiTypography-root": {
            fontWeight: 400,
            fontSize: ({size}) =>
                convertPixelsToRems(totalReviewSizes[size].fontSize),
            // lineHeight: ({size}) =>
            //     convertPixelsToRems(totalReviewSizes[size].lineHeight),
            fontFamily: "Roboto",
            letterSpacing: 0,
            color: ({totalReviewColor}) =>
                Boolean(totalReviewColor)
                    ? totalReviewColor
                    : Branding.Colors.black[60],
        },
    },
    ratingsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:"center",
        minWdth: 300,
    }
});
