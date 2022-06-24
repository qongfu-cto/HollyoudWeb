import {makeStyles} from '@mui/styles';
import {mediaQueries} from "utilities/designSystem";

export const useLandingPageHeaderStylesEN = makeStyles({
    container: {
        width: "100%",
        position: 'relative',
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 20,
        [mediaQueries.small]: {
            paddingRight: 10
        }
        // backgroundColor:"red"
    },
    flagStyle: {
        border: 'none',
        borderRadius: 18
    },
    flagWrapper: {
        display: 'flex',
        position: 'absolute',
        left: 15
    }

});
