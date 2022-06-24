import { FC } from 'react';
import Link from 'next/link';
import Img from '../../Atoms/img';
import QloudCityLogo from 'assets/images/QloudCityLogo_Compact.svg';
//import {MobileStickyNavbarProps, StickyNavbarProps} from './types';
import { makeStyles } from '@mui/styles';
import { convertPixelsToRems } from 'utilities/theme';
import { Branding } from 'utilities/branding';
import { fullPageWidth } from 'utilities/utils';
import {
  MobileStickyNavbarProps,
  StickyNavbarProps
} from '../stickyNavbar/types';
//import { useMobileNavigationBarStyles } from 'components/Organisms/stickyNavbar/stylesEN';

const useMobileNavigationBarStyles = makeStyles({
  mobileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: (props: StickyNavbarProps) => 'space-between',
    padding: `${convertPixelsToRems(10)} ${convertPixelsToRems(6)}`,
    border: (props: StickyNavbarProps) =>
      `solid 1px ${props?.hasLogo ? Branding.Colors.black[16] : 'transparent'}`,
    position: 'sticky',
    width: '100%',
    height: 80,
    top: 0,
    zIndex: 2,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
		boxShadow: ` 0px 1px 2px  ${Branding.Colors.black[6]}`,
  },
  mobileBrandContainer: {
    height: 60,
    width: 60
  },

  mobileImage: {
    width: 60,
    height: 60
  }
});

const MobileStickyNav: FC<MobileStickyNavbarProps> = ({
  hasLogo,
  children
}) => {
  const styles = useMobileNavigationBarStyles({ hasLogo });
  const width = fullPageWidth();
  // console.log(hasLogo);
  return (
    <div className={styles.mobileContainer}>
      {hasLogo && (
        <Link href="/" passHref>
          <a className={styles.mobileBrandContainer}>
            <Img
              alt="logo"
              imgProps={{ width: 60, height: 60, src: QloudCityLogo }}
            />
          </a>
        </Link>
      )}
      {children}
    </div>
  );
};

export default MobileStickyNav;
