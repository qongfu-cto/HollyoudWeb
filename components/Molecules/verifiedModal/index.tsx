import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Styles } from './style';
import { Branding } from 'utilities/branding';
import QText from 'components/Atoms/text';

interface VerifiedModalProps {
  open: boolean;
  handleClose?: () => void;
  maxWidth?: any;
  documentStatus: string;
  uploadDocument: (file: any) => void;
  updateDocument: (file: any, docId: any) => void;
  applyDocument: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VerifiedModal({
  open,
  handleClose,
  maxWidth,
  documentStatus,
  uploadDocument,
  updateDocument,
  applyDocument
}: VerifiedModalProps) {
  const styles = Styles();
  return (
    <div>
      <Dialog
        className={styles.center}
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
      >
        <DialogTitle>
          <Box className={styles.columnFlex}>
            <QText
              label={'Add CPR or National ID'}
              labelStyle={{
                height: 30,
                color: Branding.Colors.primary.dark,
                textAlign: 'center',
                fontWeight: 600,
                fontSize: 24,
                fontFamily: 'Outfit'
              }}
            />
            <QText
              label={'Upload your CPR or National ID.'}
              labelStyle={{
                height: 31,
                width: 272,
                color: Branding.Colors.black[60],
                textAlign: 'center',
                fontSize: 14,
                fontFamily: 'Roboto',
                marginTop: 3
              }}
            />
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className={styles.content}
          >
            {/* {content} */}
            {/* <Box className={[style.logoUpload, style.absolutePosition].join(" ")}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="logo">
                <Input
                  accept="image/svg"
                  id="logo"
                  type="file"
                  onChange={
                    mode === "edit"
                      ? (event: any) => onSelectFile(event, "logo")
                      : (event: any) => onSelectFile(event, "newLogo")
                  }
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Image src={CAMERA} alt="" />
                </IconButton>
              </label>
            </Stack>
          </Box> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={styles.btns}>
          <Button
            variant="outlined"
            sx={{
              width: 160,
              height: 32,
              borderRadius: 24,
              border: '1px solid ' + Branding.Colors.black[60],
              color: Branding.Colors.primary.normal,
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'Outfit',
              textTransform: 'none'
            }}
            //onClick={() => action()}
          >
            Action
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: 100,
              height: 32,
              borderRadius: 24,
              border: '1px solid ' + Branding.Colors.black[60],
              color: Branding.Colors.primary.normal,
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'Outfit',
              textTransform: 'none'
            }}
            onClick={handleClose}
          >
            Action
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
