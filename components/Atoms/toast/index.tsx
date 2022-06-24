import React from 'react';
import { Alert } from '@mui/material';
import { Branding } from '../../../utilities/branding';
import { useToastStylesEN } from './styleEN';

type toastProps = {
  icon?: HTMLImageElement;
  text?: string;
  error?: boolean;
  margin?: number | string;
};

/**
 * BackTextButton
 *
 * A component that let's the user go back to the previous page
 * or back to the home page.
 *
 * @param label - optional label that defaults to "Back to Home".
 * @param hrefLink - optional "/url" that defaults to home page "/".
 */
const Toast = ({ icon, text, error, margin }: toastProps) => {
  //const styles = useInputFieldStylesEN();

  const ErrorTost = Branding.Colors.danger.tint;
  const SuccessToast = Branding.Colors.success;
  const errorColor = error
    ? Branding.Colors.danger.bright
    : Branding.Colors.black[100];
  const styles = useToastStylesEN({ errorColor });
  return (
    // eslint-disable-next-line @next/next/link-passhref

    <Alert
      className={styles.container}
      sx={{
        backgroundColor: error ? ErrorTost : SuccessToast,
        margin: margin ?? 0
      }}
      icon={icon}
    >
      {text}
    </Alert>
  );
};

export default Toast;
