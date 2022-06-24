import { Avatar, Card } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Styles } from './style';
import Image from 'next/image';

const ProfileCard = ({ cardBody, cardHeader, action, icon, hasShadow }: any) => {
  const styles = Styles();

  return (
    <div className={hasShadow ? styles.cardWithShadow : styles.card} onClick={action}>
      <div className={styles.row}>
        <div className={styles.flex2}>
          {icon ? (
            <Image width="48" height="48" alt="" src={icon} />
          ) : (
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          )}
        </div>
        <div className={styles.flex7}>
          <p className={styles.cardHeader}>{cardHeader}</p>
          <p className={styles.cardBody}>{cardBody}</p>
        </div>
        <div className={styles.flex1}>
          <ArrowForwardIosIcon className={styles.forward} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
