import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

type Props = {
  margin: string | number;
  border: string | number;
  padding: string | number;
};

export const useInputFieldStylesEN = makeStyles<
  Theme,
  {
    margin: string | number | undefined;
    border: string | number | undefined;
    padding: string | number | undefined;
  }
>(theme => ({
  containerFill: {
    '&.MuiFilledInput-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      margin: ({ margin }) => margin ?? 0,
      borderRadius: ({ border }) => border ?? 4,
      backgroundColor: Branding.Colors.white,
      transition: theme?.transitions?.create([
        'border-color',
        'background-color',
        'box-shadow'
      ]),

      '&.Mui-focused': {
        boxShadow: `${Branding.Colors.black[60]} 0 2px 2px 0`,
        borderColor: Branding.Colors.primary.light
      }
    }
  },

  containerOutlined: {
    '&.MuiOutlinedInput-root': {
      margin: ({ margin }) => margin ?? 0,
      padding: ({ padding }) => padding ?? 0,
      '& fieldset': {
        borderColor: Branding.Colors.black[16]
      }
    }
  },
  input: {
    fontSize: 14
  },
  outlined: {
    '&.MuiOutlinedInput-input': {
      padding: 0
    }
  }
}));
