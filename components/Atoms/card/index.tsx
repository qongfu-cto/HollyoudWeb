import React, { ReactElement } from 'react';
import { useCardStyleEN } from './stylesEN';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardMediaProps,
  CardProps,
  Skeleton
} from '@mui/material';

interface CardsProps {
  children?: ReactElement | ReactElement[];
  height?: string | number;
  cardStyle?: string;
  image: string;
  imgProps?: CardMediaProps;
  containerPadding?: number;
  imgSkeltonWidth: string | number;
  imgSkeltonHeight: string | number;
  alt: string;
  cardProps?: CardProps;
  disableAction?: boolean;
  onClick?: () => void;
}

const sampleData =
  'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.The bedding was hardly able to cover it and seemed ready to slide off any moment.';

/**
 * Cards
 *
 * A component that displays cards.
 *
 * @param content - any React element or component
 * @param width - optional card width {eg 300tx or 100%}
 * @param borderRadius - optional card border radius {eg 15}
 * @param preview - optional props when viewing in Storybook
 */
const Cards = ({
  cardProps,
  disableAction,
  onClick,
  image,
  alt,
  imgSkeltonHeight,
  imgSkeltonWidth,
  cardStyle,
  containerPadding,
  children
}: CardsProps): JSX.Element => {
  const style = useCardStyleEN();

  return (
    <Card
      className={style.card}
      // style={{
      //   width: width ?? 260,
      //   borderRadius: borderRadius ?? 12,
      //   padding: padding ?? 16,
      //   margin: margin ?? 5,
      //   ...styles,
      // }}
      {...cardProps}
    >
      <CardActionArea disabled={disableAction} onClick={onClick}>
        {image ? (
          <CardMedia
            classes={{ img: style.image }}
            component="img"
            height="216"
            image={image}
            alt={alt}
          />
        ) : (
          // <Img
          //   imgProps={{ src: image, height: imageHeight, width: imageWidth }}
          // />
          <Skeleton
            variant="rectangular"
            width={imgSkeltonWidth}
            height={imgSkeltonHeight}
          />
        )}

        <CardContent
          classes={{ root: style.container }}
          className={cardStyle}
          style={{
            padding: containerPadding
          }}
        >
          {children ?? sampleData}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
