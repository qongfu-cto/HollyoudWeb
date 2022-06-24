import { Button, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { Styles } from './style';

const CustomModal = ({ message, btnText, firstBtnAction }: any) => {
  const styles = Styles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={true}
      // onClose={handleClose}
      closeAfterTransition
      // BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={true}>
        <Box className={styles.modal}>
          <Typography id="transition-modal-title" className={styles.modalText}>
            {message}
          </Typography>
          <div className={styles.okay}>
            <Button
              onClick={firstBtnAction}
              className={styles.okayBtn}
              variant="outlined"
            >
              {btnText}
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
