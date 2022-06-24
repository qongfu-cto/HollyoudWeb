import React from 'react';
import Image, { ImageProps } from 'next/image';
import { CSSProperties } from '@mui/styles';

type InputFieldProps = {
  source?: HTMLImageElement | any | string;
  alt?: string;
  container?: CSSProperties;
  style?: string;
  click?: () => void;
  imgProps?: ImageProps;
  width?: string;
  height?: string;
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
const Img = ({
  source,
  alt,
  container,
  click,
  style,
  imgProps,
  width,
  height
}: InputFieldProps) => {
  const styles = Styles();

  return (
    // eslint-disable-next-line @next/next/link-passhref
    <div style={container} className={style}>
      {width ? (
        <Image
          src={source ?? ''}
          alt={alt}
          onClick={click}
          {...imgProps}
          width={width}
          height={height}
          layout="responsive"
          className={styles.image}
        />
      ) : (
        <Image src={source ?? ''} alt={alt} onClick={click} {...imgProps} />
      )}
    </div>
  );
};

export default Img;

import { makeStyles } from '@mui/styles';

export const Styles: any = makeStyles(props => ({
  image: {}
}));
