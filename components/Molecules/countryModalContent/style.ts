import { Branding } from 'utilities/branding';
import { makeStyles } from '@mui/styles';

export const Styles = makeStyles({
  ml8: {
    marginLeft: 8
  },
  fZ12: {
    fontSize: 12
  },
  code: {
    width: 30
  },
  row: {
    flexDirection: 'row',
    display: 'flex'
  },
  fullWidth: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchCountry: {
    width: '80%',
    height: 40
  },
  avatar: {
    marginTop: 8
  },
  borderBottom: {
    borderTop: `1px solid ${Branding.Colors.black[6]}`,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%'
  },
  selectedCountry: {
    backgroundColor: Branding.Colors.black[16]
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  down: {
    marginTop: 250,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkIcon: {
    color: Branding.Colors.success.normal
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  }
});
