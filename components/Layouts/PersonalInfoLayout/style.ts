import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  sectionContainer: {
    maxWidth: '100%',
    margin: `0 24px `,
    padding: 0,
    marginTop: 100
  },
  navigation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16
  },
  label: {
    padding: 0,
    margin: 0,
    paddingLeft: 16,
    color: Branding.Colors.grey2,
    fontSize: 12,
    height: 'auto'
  },
  value: {
    padding: 0,
    margin: 0,
    paddingLeft: 24,
    color: Branding.Colors.text,
    marginTop: 8,
    height: 'auto',
    fontSize: 17
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrow: {
    color: Branding.Colors.grey3
  }
});
