import React, { ReactNode, CSSProperties } from 'react';
import Image from 'next/image';
import { Typography, TypographyProps } from '@mui/material';
import { useQTextStylesEN } from './styleEN';
import { ReactElement } from 'react-markdown/lib/react-markdown';

interface QTextProps {
  label?: string | number | ReactNode;
  children?: React.ReactElement;
  iconLeft?: string;
  iconImageLeft?: ReactElement;
  iconImageRight?: ReactElement;
  iconRight?: string;
  iconTitle?: string;
  labelColor?: string | undefined;
  labelStyle?: CSSProperties;
  textProps?: TypographyProps;
  containerMargin?: string | number;
  iconLeftStyle?: React.CSSProperties;
  iconRightStyle?: React.CSSProperties;
  containerWidth?: number | string;
  iconHeight?: number | string;
  iconWidth?: number | string;
}

/**
 * Text
 *
 * A text component with optional icon
 * @param label - main text
 * @param labelColor color for main text (default primary normal)
 * @param labelStyle - css style to customize main text
 * @param textProps - all available props for text component
 * @param children - optional to pass react components as a child
 * @param iconLeft optional to add icon on left next to text
 * @param iconRight optional to add icon on Right next to text
 * @param iconTitle icon alt title

 * */

const QText = ({
  label,
  textProps,
  children,
  iconLeft,
  iconRight,
  iconTitle,
  labelColor,
  labelStyle,
  containerMargin,
  iconLeftStyle,
  iconRightStyle,
  containerWidth,
  iconImageLeft,
  iconImageRight,
  iconHeight,
  iconWidth
}: QTextProps) => {
  const useStylesEN = useQTextStylesEN({ color: labelColor });

  return (
    <div
      className={useStylesEN.container}
      style={{ margin: containerMargin, width: containerWidth }}
    >
      {iconLeft && !iconHeight && !iconWidth && (
        <div className={useStylesEN.img} style={iconLeftStyle}>
          <Image src={iconLeft} alt={iconTitle} />
        </div>
      )}
      {iconLeft && iconHeight && iconWidth && (
        <div className={useStylesEN.img} style={iconLeftStyle}>
          <Image
            src={iconLeft}
            alt={iconTitle}
            width={iconWidth}
            height={iconHeight}
          />
        </div>
      )}
      {iconImageLeft && (
        <div className={useStylesEN.img} style={iconLeftStyle}>
          {iconImageLeft}
        </div>
      )}

      <Typography
        className={useStylesEN.label}
        style={labelStyle}
        {...textProps}
      >
        {label}
        {children}
      </Typography>
      {iconRight && (
        <div className={useStylesEN.img} style={iconRightStyle}>
          <Image src={iconRight} alt={iconTitle} />
        </div>
      )}
      {iconImageRight && (
        <div className={useStylesEN.img} style={iconRightStyle}>
          {iconImageRight}
        </div>
      )}
    </div>
  );
};

export default QText;
