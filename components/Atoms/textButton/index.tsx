import React from 'react';
import Link from 'next/link';
import { useTextButtonStylesEN } from './styleEN';
import { Button, ButtonProps } from '@mui/material';

type TextButtonProps = {
  label?: string;
  hrefLink?: string;
  underline?: boolean;
  labelColor?: string;
  button?: boolean;
  buttonProps?: ButtonProps;
  labelStyles?: React.CSSProperties | any;
  style?: React.CSSProperties;
  onClick?: VoidFunction;
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
const TextButton = ({
  label,
  hrefLink,
  underline,
  labelColor,
  button,
  buttonProps,
  labelStyles,
  style,
  onClick
}: TextButtonProps) => {
  const useStylesEN = useTextButtonStylesEN();

  if (button) {
    return (
      <Button
        {...buttonProps}
        variant="text"
        className={useStylesEN.text}
        style={{ backgroundColor: 'transparent', ...style }}
      >
        <p style={labelStyles}>{label}</p>
      </Button>
    );
  }

  return (
    <>
      {hrefLink ? (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href={hrefLink ? hrefLink : '/'}>
          <div
            className={useStylesEN.label}
            style={{
              cursor: 'pointer',
              textDecorationLine: underline ? 'underline' : 'none',
              lineHeight: 1.5,
              color: labelColor,
              ...labelStyles
            }}
          >
            {label ? label : '← Back to Home'}
          </div>
        </Link>
      ) : (
        <div
          onClick={onClick}
          className={useStylesEN.label}
          style={{
            cursor: 'pointer',
            textDecorationLine: underline ? 'underline' : 'none',
            lineHeight: 1.5,
            color: labelColor,
            ...labelStyles
          }}
        >
          {label ? label : '← Back to Home'}
        </div>
      )}
    </>
  );
};

export default TextButton;
