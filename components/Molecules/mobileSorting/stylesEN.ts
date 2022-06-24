import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';
import {Theme} from '@mui/material';

export const useMobileSortingStylesEN = makeStyles(() => ({
  container:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      padding: 10,
      borderBottom:`1px solid ${Branding.Colors.black[16]}`,
      backgroundColor:Branding.Colors.white
  },
  list:{
    borderBottom:`1px solid ${Branding.Colors.black[6]}`,
    backgroundColor:Branding.Colors.black[4],
    padding: `20px 50px`,
cursor: "pointer"
  }
}));
