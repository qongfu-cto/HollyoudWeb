import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const Styles = makeStyles({
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal'
  },
  okay: {
    width: '100%',
    textAlign: 'center',
    marginTop: 8
  },
  okayBtn: {
    width: '100%',
    borderRadius: 8,
    height: 48,
    textTransform: 'capitalize'
  },
  modal: {
    backgroundColor: Branding.Colors.white,
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
    borderRadius: 8,
    borderColor: Branding.Colors.white,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    paddingBottom: 32
  }
});
