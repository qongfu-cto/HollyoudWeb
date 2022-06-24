import Breadcrumb from 'components/Atoms/breadcrumbs';
import QButton from 'components/Atoms/button';
import StickyNavbar from 'components/Organisms/stickyNavbar';
import React from 'react';
import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';
import { useProfilePageStyles } from './stylesEN';

export const ErrorProfileLayout = ({
  children
}: {
  children: React.ReactElement;
}) => {
  const styles = useProfilePageStyles();
  return (
    <div style={{ height: '80vh' }}>
      <StickyNavbar hasLogo position="sticky" />
      <section
        style={{
          height: '100%',
          padding: `0 ${convertPixelsToRems(24)}`,
          width: '80%',
          margin: '0 auto',
          maxWidth: 1280
        }}
      >
        <Breadcrumb
          paths={[{ label: 'Home', route: '/' }]}
          pageName={'Page Not Found'}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          {children}

          <QButton
            label="Back to Home"
            buttonProps={{ href: '/' }}
            onClick={() =>
              localStorage.setItem(
                'placeError',
                JSON.stringify(
                  'The link shared is no longer available. Please enjoy surfing Qloud City!'
                )
              )
            }
            style={{
              backgroundColor: Branding.Colors.primary.normal,
              marginTop: 20
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default ErrorProfileLayout;
