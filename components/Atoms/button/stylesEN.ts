import { ThemeOptions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useButtonStylesEN = makeStyles((theme: ThemeOptions) => ({
  button: {
    paddingLeft: 32,
    paddingRight: 32,
    cursor: 'pointer',
    borderRadius: 12,
    height: 48,
    width: 'auto',
    border: 'none !important',
    backgroundColor: Branding.Colors.primary['dark'],
    '&:hover': {
      backgroundColor: Branding.Colors.primary['dark']
    },
    '&:active': {
      backgroundColor: Branding.Colors.primary['dark']
    },
    '&:focus': {
      backgroundColor: Branding.Colors.primary['dark']
    }
  },

  labelSolid: {
    color: Branding.Colors.white + '!important'
    //fontFamily: 'Poppins'
  },

  labelOutline: {
    color: Branding.Colors.white
  },

  disable: {
    '&.Mui-disabled': {
      backgroundColor: Branding.Colors.black[24]
    }
  }
}));
