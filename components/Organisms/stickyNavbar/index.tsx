import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QloudEstateLogo from 'assets/images/QloudCitySimpleLogo.svg';
import { useNavigationBarStyles } from './stylesEN';
import { StickyNavbarProps } from './types';
import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';
import SignupLoginButton from 'components/Molecules/signupLoginButton';
import { useSearch } from 'container/search';

const StickyNavbar: FC<StickyNavbarProps> = ({
  hasLogo = true,
  children,
  position
}) => {
  const styles = useNavigationBarStyles({ hasLogo });

  //FIXME sticky position
  return (
    <div
      className={styles.container}
      style={{
        padding: `${convertPixelsToRems(10)} ${convertPixelsToRems(24)}`,
        position: position,
        borderBottom: `solid 1px ${
          hasLogo ? Branding.Colors.black[16] : 'transparent'
        }`,
        justifyContent: hasLogo ? 'space-between' : 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      {hasLogo && (
        <Link href="/">
          <a className={styles.brandContainer}>
            <Image
              src={QloudEstateLogo}
              layout="intrinsic"
              alt="QloudCity Logo"
            />
          </a>
        </Link>
      )}
      <div className={styles.dynamicContent}>{children}</div>
      {/* <SignupLoginButton /> */}
    </div>
  );
};

export default StickyNavbar;
