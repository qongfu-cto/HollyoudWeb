import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex2: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex'
  },
  flex7: {
    flex: 0.7,
    justifyContent: 'center',
    display: 'inline-flex',
    flexDirection: 'column'
  },
  flex1: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex'
  },
  cardBody: {
    color: Branding.Colors.black[60],
    fontFamily: 'Roboto',
    fontSize: 13,
    margin: 0,
    padding: 0,
    paddingTop: 4
  },
  cardHeader: {
    fontColor: Branding.Colors.black[60],
    fontWeight: 400,
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  forward: {
    color: Branding.Colors.black[24],
    height: 32,
    width: 32
  },
  card: {
    marginBottom: 12,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: `1px solid ${Branding.Colors.black[6]}`,
    cursor: 'pointer'
  },
  cardWithShadow: {
    marginBottom: 12,
    paddingTop: 10,
    paddingBottom: 10,
    cursor: 'pointer',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.24)',
    borderRadius: 12
  },
  icon: {
    width: 48,
    height: 48,
    backgroundColor: Branding.Colors.primary.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
});
