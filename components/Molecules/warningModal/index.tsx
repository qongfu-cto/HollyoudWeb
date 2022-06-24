import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Styles } from './style';
import { Branding } from 'utilities/branding';
import { createTheme } from '@material-ui/core';
import ModalLayout from 'components/Atoms/modal';
import { Box, IconButton } from '@mui/material';
import QText from 'components/Atoms/text';
import CloseIcon from '@mui/icons-material/Close';

interface warningPropsInterface {
  open: boolean;
  handleClose?: () => void;
  maxWidth?: any;
  content?: string | React.ReactElement;
  title?: string | React.ReactElement;
  firstBtn: string;
  secondBtn: string;
  firstBtnStyle: string;
  secondBtnStyle: string;
  action: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WarningModal({
  open,
  handleClose,
  maxWidth,
  title,
  content,
  firstBtn,
  secondBtn,
  secondBtnStyle,
  firstBtnStyle,
  action
}: warningPropsInterface) {
  const styles = Styles();

  return (
    <section>
      <ModalLayout
        openModal={open}
        handleCloseModal={handleClose}
        modalStyle={styles.modal}
        modalHeight={296}
        modalWidth={496}
        layoutPadding={0}
      >
        {/* <Modal open={open} onClose={onClose}>
        <div className={styles.container}> */}

        <header className={styles.header}>
          <IconButton
            classes={{ root: styles.closeIcon }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <span className={styles.title}>{title}</span>
        </header>
        <main className={styles.content}>{content}</main>

        <footer className={styles.footer}>
          <Button
            variant="outlined"
            classes={{ root: styles.clearButton }}
            onClick={handleClose}
          >
            {secondBtn}
          </Button>
          <Button
            variant="contained"
            classes={{ root: styles.applyButton }}
            onClick={() => action()}
          >
            {firstBtn}
          </Button>
        </footer>
      </ModalLayout>
    </section>
    // <div>
    //   <Dialog
    //     // className={styles.center}
    //     open={open}
    //     TransitionComponent={Transition}
    //     onClose={handleClose}
    //     aria-describedby="alert-dialog-slide-description"
    //     maxWidth={maxWidth}
    //     classes={{ paper: styles.paper }}
    //   >
    //     <DialogTitle className={styles.title}>{title}</DialogTitle>
    //     <DialogContent>
    //       <DialogContentText
    //         id="alert-dialog-slide-description"
    //         className={styles.content}
    //       >
    //         {content}
    //       </DialogContentText>
    //     </DialogContent>
    //     <DialogActions className={styles.btns}>
    //       <Button
    //         variant="outlined"
    //         sx={{
    //           width: 160,
    //           height: 32,
    //           borderRadius: 24,
    //           border: '1px solid ' + Branding.Colors.black[60],
    //           color: Branding.Colors.primary.normal,
    //           fontSize: 16,
    //           textAlign: 'center',
    //           fontFamily: 'Outfit',
    //           textTransform: 'none'
    //         }}
    //         onClick={() => action()}
    //       >
    //         {firstBtn}
    //       </Button>
    //       <Button
    //         variant="outlined"
    //         sx={{
    //           width: 100,
    //           height: 32,
    //           borderRadius: 24,
    //           border: '1px solid ' + Branding.Colors.black[60],
    //           color: Branding.Colors.primary.normal,
    //           fontSize: 16,
    //           textAlign: 'center',
    //           fontFamily: 'Outfit',
    //           textTransform: 'none'
    //         }}
    //         onClick={handleClose}
    //       >
    //         {secondBtn}
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
    // </div>
  );
}
