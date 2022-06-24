import { makeStyles } from '@mui/styles';

export const useModalHeaderStylesEN = makeStyles(props => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: `0px 12px 0px 12px`
  },
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 32
  }
}));
