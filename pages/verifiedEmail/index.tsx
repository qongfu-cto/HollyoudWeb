import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const VerifiedEmail = () => {
  const { query, asPath } = useRouter();
  const [successfullyVerified, setSuccessfullyVerified] = useState(false);

  const verifiyUser = async () => {
    if (Object.keys(query).length !== 0) {
      const result = await AuthAPI.verifiyUserEmail({
        email: query.email,
        code: query.code?.toString()
      });

      if (result?.status === 200) {
        setSuccessfullyVerified(true);
      }
    }
  };

  useEffect(() => {
    verifiyUser();
  }, [query]);

  const isServer = () => typeof window === `undefined`;
  const styles = Styles();
  return isServer() ? null : (
    <div className={styles.container}>
      <div className={styles.jumbotron}>
        {successfullyVerified ? (
          <h1>Your email is verified successfully ✅</h1>
        ) : (
          <h3>
            Your email could not be verified the link expires after 15 min ❌
          </h3>
        )}
      </div>

      <Link href="/" passHref>
        <Button
          sx={{
            backgroundColor: '#3190af',
            color: '#fff',
            '&:hover': {
              backgroundColor: `#3190af; box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px`
            }
          }}
          className={styles.button5}
          variant="text"
        >
          Go to QloudCity
        </Button>
      </Link>
    </div>
  );
};

export default VerifiedEmail;

import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { Button } from '@mui/material';
import { AuthAPI } from 'services/authAPI';

export const Styles = makeStyles(props => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 50
  },
  jumbotron: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',
    marginBottom: '40px'
  },
  button5: {
    backgroundClip: 'padding-box',
    backgroundColor: '#3190af',
    border: `1px solid transparent`,
    borderRadius: '0.25rem',
    boxShadow: `rgba(0, 0, 0, 0.02) 0 1px 3px 0`,
    boxSizing: `border-box`,
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'system-ui',
    justifyContent: 'center',
    lineHeight: 1.25,
    margin: 0,
    minHeight: '3rem',
    padding: 'calc(0.875rem - 1px) calc(1.5rem - 1px)',
    position: 'relative',
    textDecoration: 'none',
    transition: `all 250ms`,
    userSelect: 'none',
    '&:hover': {
      backgroundColor: `#3190af; box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px`,
      transform: `translateY(-1px)`
    },
    '&:focus': {
      backgroundColor: `#3190af; box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px`
    },
    '&:active': {
      backgroundColor: `#3190af`,
      boxShadow: `rgba(0, 0, 0, 0.06) 0 2px 4px`,
      transform: `translateY(0)`
    }
  }
}));
