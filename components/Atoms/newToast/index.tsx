import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type ToastProps = {
  message: string;
  type: 'error' | 'warning' | 'info' | 'success' | undefined;
  visible: boolean;
  setVisible: any;
  duration?: number;
};

/**
 * Toast
 *
 * @param message - required, The message to display.
 * @param type - required, The severity of the alert. This defines the color and icon used.
 * @param visible - required If true, the component is shown.
 *
 */

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewToast = ({
  message,
  type,
  visible,
  setVisible,
  duration
}: ToastProps) => {
  return (
    <Snackbar
      open={visible}
      autoHideDuration={duration || 6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={() => setVisible(false)}
      sx={{ maxWidth: 5000 }}
    >
      <Alert severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NewToast;
