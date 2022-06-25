import React, { useState } from 'react';
import { onMobile } from 'utilities/utils';
import { useToast } from 'utilities/hook/useToast';
import LandingPageFooter from '../../Organisms/landingPageFooter';
import LandingPageFooterExpended from '../../Organisms/landingPageFooterExpended';
import LandingPageHeader from '../../Organisms/landingPageHeader';
import { useLandingPageLayoutStylesEN } from './styleEN';
import { Branding } from 'utilities/branding';

interface LandingPageLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  search?: React.ReactElement | React.ReactElement[];
}

const LandingPageLayout = ({ children, search }: LandingPageLayoutProps) => {
  const styles = useLandingPageLayoutStylesEN();
  const Toast = useToast();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setTimeout(() => {
      window.scrollTo(0, 2000);
    }, 10);

    setOpen(!open);
  };
  return (
    <div style={{ backgroundColor: Branding.Colors.black.black }}>
      {!onMobile() ? (
        <>
          <div
            style={{
              position: 'fixed',
              top: '0px !important',
              zIndex: 1,
            }}
          >
            {/* <LandingPageHeader forLandingPage={true}/> */}
          </div>
          <div style={{ 
            width: '100vW',
            height: '100vH',
            // marginTop: -80,
            background: `url('https://qcloud-staging.s3.me-south-1.amazonaws.com/web/hollyoud.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}/>
          <div style={{ 
            width: '100vW',
            height: '100vH',
            backgroundColor: Branding.Colors.black.black,
            opacity: 0.9,
            marginTop: '-100vH'
          }}>
            {/* // TODO: Add content here */}
          </div>
        </>
      ) : <LandingPageHeader />}
      
      {Toast}
      <div className={styles.container} style={{ backgroundColor: Branding.Colors.black.black }}>{search}</div>
      {children}
      {!onMobile() ? (
        <div style={{ width: '100%' }}>
          {open && <LandingPageFooterExpended />}
          <LandingPageFooter
            label={
              open ? '— Minimize' : '+ Terms, Privacy, Feedback, and More...'
            }
            showFooter={() => handleOpen()}
          />
        </div>
      ) : null}
    </div>
  );
};

export default LandingPageLayout;
