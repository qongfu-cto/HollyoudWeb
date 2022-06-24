import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useOutLinedInputStylesEN = makeStyles<
  Theme,
  {
    height: string | number | undefined;
    textAlign: 'start' | 'end' | 'center' | undefined;
    width: string | number | undefined;
  }
>(() => ({
  btn: {
    marginRight: 20
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px 5px 0px 5px ',
    width:  '100% !important'
  },

  input: {
    textAlign: ({ textAlign }) => textAlign ?? 'center',
    height: ({ height }) => height ?? 'auto',
    width: ({ width }) => width ?? '100%'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center'
  }
}));
