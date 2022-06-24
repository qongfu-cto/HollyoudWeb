import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";


export const useButtonHorizontalStylesEN = makeStyles((props) => ({
        container: {
            display: "flex",
            flexDirection: "row",


        },
        disable: {


            "&.Mui-disabled": {
                backgroundColor: Branding.Colors.black[16],
            },
        },
        button: {

            //   marginBottom: 20,
            //  width: 180,
            //   height: 48,

            "&.MuiButton-root": {
                width: 180,
                borderRadius: 24,
                borderWidth: 1,
                borderColor: Branding.Colors.primary.normal,
                marginLeft: 10,
                fontSize: 16,
                lineHeight: "20px",
                fontFamily: "Outfit",
                letterSpacing: 0,
            },


        },

        notice: {
            border: `1px solid ${Branding.Colors.primary.normal}`,
            borderRadius: 50,
            width: 15,
            height: 15,
            backgroundColor: Branding.Colors.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 20,
            right: 0
        },
        notitext: {
            fontSize: 8,

        },
     
    }
))


