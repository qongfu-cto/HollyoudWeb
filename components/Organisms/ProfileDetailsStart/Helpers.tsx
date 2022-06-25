import { Rating, Typography } from '@mui/material';
import QText from 'components/Atoms/text';
import { Children, FC } from 'react';
import { Branding } from 'utilities/branding';
import {
  useMobileProfileDetailsStartStyles,
  useProfileDetailsStartStyles
} from './stylesEN';
import placesIcon from '../../../assets/icons/place-icon.svg';
import propertiesIcon from '../../../assets/icons/property-icon.svg';
import locationIcon from '../../../assets/icons/location-icon-list.svg';
import _ from 'lodash';
import { convertPixelsToRems } from 'utilities/theme';
import QRating from 'components/Atoms/Qrating';
import { ReactElement } from 'react-markdown/lib/react-markdown';

export const BorderedBlockTitle: FC<{ title: string; mobile?: boolean }> = ({
  title,
  mobile
}) => {
  const styles = useProfileDetailsStartStyles();

  return (
    <Typography
      variant="h5"
      classes={{ root: styles.borderedBlockTitle }}
      style={{ padding: mobile ? '1.5rem 0 0 0' : 0 }}
    >
      {title}
    </Typography>
  );
};

export const BorderedBlock: FC<{ title?: string; mobile?: boolean }> = ({
  title,
  children,
  mobile
}) => {
  const styles = useProfileDetailsStartStyles();

  return (
    <section
      className={styles.borderedBlock}
      style={{
        borderTop: mobile ? 0 : `solid 1px ${Branding.Colors.black[16]}`
      }}
    >
      {title && <BorderedBlockTitle title={title} />}
      {children}
    </section>
  );
};

export const FixedContent = ({
  location,
  type,
  category,
  title,
  rating
}: {
  location: string;
  type: 'place' | 'property';
  category?: string;
  title: string;
  rating: number;
}) => {
  const styles = useMobileProfileDetailsStartStyles();

  return (
    <div className={styles.contentFooter}>
      <div
        className={styles.start}
        style={{
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant="h4"
          // classes={{ root: styles.title }}
          style={{
            fontSize: convertPixelsToRems(16),
            fontWeight: 500,
            font: 'normal normal medium 8px/14px Outfit',
            color: Branding.Colors.white,
            letterSpacing: 0,
            paddingLeft: 5
          }}
        >
          {title}
        </Typography>
        <div className={styles.start}>
          <Rating
            readOnly
            max={1}
            value={rating}
            precision={0.1}
            size={'medium'}
          />
          <QText
            label={rating?.toFixed(1) ?? '0.0'}
            labelStyle={{
              font: 'normal normal medium 8px/14px Outfit',
              fontSize: '16px',
              letterSpacing: 0,
              fontWeight: 500,
              paddingLeft: 5
            }}
            labelColor={Branding.Colors.black['60']}
          />
        </div>
      </div>
      <div className={styles.start}>
        <QText
          label={_.truncate(location, { length: 30 })}
          labelStyle={{
            font: 'normal normal medium 8px/14px Outfit',
            fontSize: '12px',
            letterSpacing: 0
          }}
          iconLeftStyle={{
            margin: 0
          }}
          iconLeft={locationIcon}
          labelColor={Branding.Colors.black[86]}
        />
        <p className={styles.divider}> | </p>
        <QText
          iconLeft={type === 'place' ? placesIcon : propertiesIcon}
          iconLeftStyle={{
            width: 16,
            height: 16,
            margin: 0
          }}
          label={_.truncate(category, { length: 30 })}
          labelStyle={{
            font: 'normal normal medium 8px/14px Outfit',
            fontSize: '12px',
            letterSpacing: 0,
            paddingLeft: 5
          }}
          labelColor={Branding.Colors.black[86]}
        />
      </div>
    </div>
  );
};

export const ScheduleModal = ({ children }: { children: ReactElement }) => {
  const styles = useProfileDetailsStartStyles();

  return <div className={styles.scheduleModal}>{children}</div>;
};
