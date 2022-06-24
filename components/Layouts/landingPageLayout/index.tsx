import React, { useState } from 'react';
import { onMobile } from 'utilities/utils';
import { useToast } from 'utilities/hook/useToast';
import LandingPageFooter from '../../Organisms/landingPageFooter';
import LandingPageFooterExpended from '../../Organisms/landingPageFooterExpended';
import LandingPageHeader from '../../Organisms/landingPageHeader';
import { useLandingPageLayoutStylesEN } from './styleEN';

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
    <div>
      <LandingPageHeader />
      {Toast}
      <div className={styles.container}>{search}</div>
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
