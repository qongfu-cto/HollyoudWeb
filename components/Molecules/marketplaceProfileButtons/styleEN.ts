import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';
import { mediaQueries } from 'utilities/designSystem';

export const useMarketplaceProfileMobileButtonsStylesEN = makeStyles<Theme, { direction?: "column" }>(() => ({
    container: {
        display: 'flex',
        flexDirection:({direction})=> direction?? 'row',
        alignItems: 'center',
        [mediaQueries.phone]:{
            padding: '0px 20px'
        },
        position:"relative",
     height:"100%"
        // marginTop:20
    },
    icon: {
        border: `1px solid ${Branding.Colors.black[16]} `,
       // padding: 5,
        borderRadius: 18,
        margin: `2px 10px `,
         width:50,
         height:50,
         display: "flex",
         alignItems:"center",
         justifyContent:"center",
    },
    dropDown:{
        width:230,
        height:100,
        backgroundColor:"white",
        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        borderRadius:12,
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly",
        padding:5,
        position:"absolute",
     margin:10,
right:0,
        zIndex:1
    },
    title:{
        display: "flex",
        flexDirection:"row", 
        justifyContent:"flex-start",
        width:"80%",
    },
   iconSize:{
       width:50,
       height:50
   }
    // marginTop:20
  
 
  // marginTop:20

  // icon: {
  //   border: `1px solid ${Branding.Colors.black[16]} `,
  //   padding: 10,
  //   borderRadius: 18,
  //   margin: `0 10px `
  // }
}))
