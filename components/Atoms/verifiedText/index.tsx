import Image from 'next/image';
import React from 'react';
import { Styles } from './style';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const VerifiedText = ({ Icon, text, success }: any) => {
  const styles = Styles();
  return (
    <>
      {success ? (
        <>
          <p className={styles.verifiedText}>
            <CheckCircleIcon
              style={{ fontSize: 12 }}
              className={styles.checkIcon}
            />
            Verified
          </p>
        </>
      ) : (
        <>
          <p className={styles.unverifiedText}>
            <CancelIcon style={{ fontSize: 12 }} className={styles.crossIcon} />
            Unverified
          </p>
        </>
      )}
    </>
  );
};

export default VerifiedText;
