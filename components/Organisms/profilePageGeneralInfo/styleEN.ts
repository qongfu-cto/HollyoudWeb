import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useProfilePageGeneralInfoStylesEN = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  container2: {
    width: 288,
    marginLeft: 350
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column'
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputContainer: {
    height: 52
  },
  input: {
    textAlign: 'center'
  },
  mobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 15
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  layout: {
    width: 336,
    height: 48,
    border: `1px solid ${Branding.Colors.primary.normal}`,
    borderRadius: 8,
    padding: 10,
    paddingLeft: 20,
    margin: `0 5px`
  },
  mobileCodeLayout: {
    width: 152,
    height: 48,
    border: `1px solid ${Branding.Colors.primary.normal}`,
    borderRadius: 8,
    padding: 10,
    paddingLeft: 20,
    margin: `0 5px`,
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  mobileLayout: {
    width: 172,
    height: 48,
    border: `1px solid ${Branding.Colors.primary.normal}`,
    borderRadius: 8,
    padding: 10,
    paddingLeft: 20,
    margin: `0 5px`
  },
  verifyBottonContainer: {
    width: 184,
    height: 64,
    border: '1px solid ' + Branding.Colors.blue.variant_4,
    backgroundColor: Branding.Colors.white,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    float: 'right',
    marginTop: -42,
    padding: '12px 8px'
  },
  actionBotton: {}
});
