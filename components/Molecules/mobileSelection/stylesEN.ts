import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';
import { Theme } from '@mui/material';

export const useMobileSortingStylesEN = makeStyles(() => ({
  container: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 10,
    // borderBottom: `1px solid ${Branding.Colors.black[16]}`,
    backgroundColor: Branding.Colors.white,
    maxHeight: 400,
    overflowY: 'scroll',
    overflowX: 'hidden',
    flex: 1,
  },
  list: {
    borderBottom: `1px solid ${Branding.Colors.black[6]}`,
    backgroundColor: Branding.Colors.black[4],
    padding: `20px 50px`,
    cursor: 'pointer'
  },
  formControlLabel: {
    width: 300,
    color: Branding.Colors.black[86],
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Outfit',
    fontWight: '600'
    // borderBottom: `solid 1px ${Branding.Colors.black[16]}`
  },
  subList: {
    width: 277,
    color: Branding.Colors.black[60],
    textAlign: 'left',
    fontFamily: 'Outfit',
    fontSize: 16
    // borderBottom: `solid 1px ${Branding.Colors.black[16]}`
  }
}));
