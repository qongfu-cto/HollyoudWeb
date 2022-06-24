import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';
import {Theme} from "@mui/material";

export const useMainSearchStylesEN = makeStyles({
    textStyle: {
        width: 72,
        height: 19,
        color: '#3190AF',
        fontSize: 16,
        fontVariant: 'normal',
        fontFamily: 'Roboto',
        letterSpacing: 0.15,
        textTransform: 'none'
    },
    placeHolderStyle: {
        color: Branding.Colors.black['100'],
        letterSpacing: 0.15,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontVariant: 'normal',
        width: '74%'
    },

    flagStyle: {
        borderRadius: 18,
        width: 42,
        height: 42
    },

    iconButtonStyle: {
        position: 'relative',
        right: 10
    },

    iconContainer: {
        width: 25,
        height: 25
    }


})


export const useMobileMainSearchStylesEN = makeStyles<Theme, { active: boolean }>(() => ({
    textStyle: {
        width: '100%',
        height: 19,
        color: '#3190AF',
        fontSize: 16,
        fontVariant: 'normal',
        fontFamily: 'Roboto',
        letterSpacing: 0.15,
        textTransform: 'none'
    },
    placeHolderStyle: {
        color: Branding.Colors.black['100'],
        letterSpacing: 0.15,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontVariant: 'normal',
        width: '100%'
    },

    flagStyle: {
        borderRadius: 18,
    },

    iconButtonStyle: {
        position: 'relative',
        right: 10
    },

    iconContainer: {
        position: 'absolute',
        left: 0,
        width: 50,
        height: 50
    },
    exploreButtonStyle: {
        padding: 0
    },
    inputWrapper: {display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 20},
    input: {
        display: "flex",
        width: '90%',
        paddingLeft: 15,
    },
    categoryInput: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        right: 0,
        width: 32,
        height: 32,
        transform: ({active}) => active ? 'rotate(180deg)' : 'rotate(0deg)'
    },
    mobileContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:  'flex-end',
       // padding: `${convertPixelsToRems(10)} ${convertPixelsToRems(6)}`,
        // border: (props: StickyNavbarProps) =>
        //   `solid 1px ${props?.hasLogo ? Branding.Colors.black[16] : 'transparent'}`,
        position: 'sticky',
     //   width: '100%',
        height: 80,
        top: 0,
        zIndex: 2,
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: ` 0px 1px 2px  ${Branding.Colors.black[6]}`,
      }
    // rightIcon: {
    //     width: 40,
    //     height: 40
    // }
}));
