import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useAuthenticationInputsStylesEN = makeStyles<
  Theme,
  {
    height: string | number | undefined;
    textAlign: 'start' | 'end' | undefined;
    width: string | number | undefined;
  }
>(() => ({
  btn: {
    marginRight: 20
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    // margin: '5px 5px 0px 5px ',
    width: '100%'
  },

  input: {
    textAlign: ({ textAlign }) => textAlign ?? 'center',
    // height: ({height}) => height ?? 'auto',
    height: ({ height }) => height,
    width: ({ width }) => width ?? '100%'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center'
  }
}));
