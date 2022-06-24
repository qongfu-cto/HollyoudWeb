import { Theme } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";


export const useDropDownStyling = makeStyles<Theme, {exact?:boolean}>(() => ({
        hotspotContentFlowStyling: {
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap",
            justifyContent: 'flex-start space-between',
            width: "100%"
        },

        parentContainer: {
            borderRadius: 14,
            overflow: 'auto',
            position: 'absolute',
            top: 65,
            display: 'flex',
            flexDirection: "row",
            flexWrap: 'wrap',

            margin: 0,
            padding: '0.5em 1em ',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e5e5',
            boxSizing: 'border-box',
            color: '#1E5065',
            fontSize: '18px',
            fontWeight: 500,
            width: 496,
            height: 224,
            zIndex: 999,
            boxShadow: '0px 3px 6px #0000003'

        },


        '@global': {
            '::-webkit-scrollbar': {
                width: '0.3em'
            },
            '*::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'red'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: '#DEDEDE',
                //outline: '1px solid slategrey'
            }
        },

        hotspotHeaderStyles: {
            fontFamily: 'Outfit',
            fontWeight: 500
        },

        containerStyling: {
            cursor: 'pointer',
            width: '49%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16
        },
        hotspotImageStyling: {
            overflow: 'hidden',
            height: 64,
            width: '35%',
            borderRadius: 12
        },

        textContainerStyling: {
            width: '63%',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '2%'
        },

        hotspotLabelStyling: {
            fontSize: 15,
            margin: 0,
            textTransform: 'capitalize'
        },

        descriptionStyling: {
          
            margin: '4px 0px 0px',
            textTransform: 'capitalize'
        },

        searchItemLabelStyling: {
            fontSize: 16,
            fontVariant: 'normal',
            fontWeight: 'normal',
            fontFamily: 'Outfit',
            color: '#4F4F4F',
            textAlign: 'left',
            letterSpacing: '0.15px',
            textTransform: "none",
            textOverflow:"ellipsis",
            whiteSpace:"nowrap",
            overflow:"hidden",
            width:(props)=> props.exact? "auto": 350

        },

        searchItemDescriptionStyling: {
            fontSize: 14,
            fontWeight: 300,
            fontFamily: 'Outfit',
            color: '#858585',
            fontVariant: 'normal',
            fontStyle: 'normal',
            textTransform: "none"
        }


    }
))


export const useMobileDropDownStyling = makeStyles((props) => ({
    hotspotContentFlowStyling: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'flex-start space-between',
        width: "100%"
    },

    parentContainer: {
        borderRadius: 14,
        overflow: 'auto',
        position: 'absolute',
        top: 65,
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',

        margin: 0,
        padding: '0.5em 1em ',
        background: '#ffffff',
        border: '1px solid #e5e5e5',
        boxSizing: 'border-box',
        color: '#1E5065',
        fontSize: '18px',
        fontWeight: 500,
        width: 496,
        height: 224,
        zIndex: 999,
        boxShadow: '0px 3px 6px #0000003'

    },


    '@global': {
        '::-webkit-scrollbar': {
            width: '0.3em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'red'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#DEDEDE',
            //outline: '1px solid slategrey'
        }
    },

    hotspotHeaderStyles: {
        fontFamily: 'Outfit',
        fontWeight: 500
    },

    containerStyling: {
        cursor: 'pointer',
        width: '49%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    hotspotImageStyling: {
        overflow: 'hidden',
        height: 64,
        width: '35%',
        borderRadius: 12
    },

    textContainerStyling: {
        width: '100%',
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: "row",

        // flexDirection: 'column',
        // paddingLeft: '2%'
    },

    hotspotLabelStyling: {
        fontSize: 15,
        margin: 0,
        textTransform: 'capitalize'
    },

    hotspotDescriptionStyling: {
        fontSize: 12,
        margin: '4px 0px 0px',
        textTransform: 'capitalize'
    },

    searchItemLabelStyling: {
        fontSize: 16,
        paddingLeft: 20,
        fontVariant: 'normal',
        fontWeight: 'normal',
        fontFamily: 'Outfit',
        color: '#4F4F4F',
        textAlign: 'left',
        letterSpacing: '0.15px',
    },

    searchItemDescriptionStyling: {
        fontSize: 14,
        fontWeight: 300,
        fontFamily: 'Outfit',
        color: '#858585',
        fontVariant: 'normal',
        fontStyle: 'normal'
    },
    searchingIcon: {
        position: 'absolute',
        alignItems: 'center',
        left: 10,
        width: 50,
    },
    crossIcon: {
        position: 'absolute',
        right: 10,
    },
    dropDownRow: {
        cursor: "pointer",
        height: 45,
        width: '100%',
        alignItems: 'center',
        display: "flex"
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: Branding.Colors.white,
        boxShadow: ` 0px 1px 2.5px  gray`,
    },
    categoryRow: {
        cursor: "pointer",
        height: 60,
        width: '100%',
        alignItems: 'center',
        display: "flex",
        borderBottom: `1px solid ${Branding.Colors.black[16]}`
    }
}));


export const useQMobileSecondaryNavigationStyling = makeStyles((width: number) => ({

    container: {
        position: 'absolute',
        padding: '10px 0px',
        left: 0,
        right: 0,
        top: 80,
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        margin: 0,
        background: '#ffffff',
        border: '1px solid #e5e5e5',
        boxSizing: 'border-box',
        color: '#1E5065',
        fontSize: '18px',
        fontWeight: 500,
        width: "auto",
        height: '100vh',
        overflow: 'scroll',
        zIndex: 999,
        boxShadow: '0px 3px 6px #0000003'
    },
    tabWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        padding: '14px 18px',
        margin: '0px 5px',
        width: 'auto',
        borderRadius: 20,
       
    },
    header: {
        display: 'flex',
        height: 50,
        width: '100%',
        //justifyContent: 'center',
        paddingBottom: 10,
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        borderBottom: `1px solid ${Branding.Colors.black[16]}`
    },
    headerWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryWrap: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 0px',
        width: '100%',
        height: '100%',

    },
    category: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2px 10px',
        borderBottom: `1px solid ${Branding.Colors.black[16]}`
    },
    subWrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    subCategory: {
        display: 'flex',
        alignItems: 'center',
        padding: '14px 30px'
    },
    subCategoryContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:"space-between",
        flexDirection:"row"
    }
}));


