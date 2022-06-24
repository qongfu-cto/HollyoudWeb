import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

const useSearchHeaderIconsStylesEN = makeStyles({
    container: {
       // boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
      // width: 64,
       // height: 208,
        display: "flex",
        flexDirection: "column",
        borderRadius: `12px 0 0 12px`,
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "fixed",
        right: 0,
        bottom:0,
       // backgroundColor: Branding.Colors.white,
        zIndex: 10
    }
});

export default useSearchHeaderIconsStylesEN;
