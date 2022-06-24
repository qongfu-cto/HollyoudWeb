import QButton from 'components/Atoms/button';
import React, { useState } from 'react';
import call from 'assets/icons/call.svg';
import rate from 'assets/icons/rate.svg';
import chat from 'assets/icons/chat.svg';
import share from 'assets/icons/share-button.svg';
import map from 'assets/icons/map.svg';
import { useMarketplaceProfileMobileButtonsStylesEN } from './styleEN';
import Img from 'components/Atoms/img';
import { Branding } from 'utilities/branding';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { DropDown } from '.';
import { ClickAwayListener } from '@mui/material';

interface MobileButtonsProps {
  telephone?: string;
  showCall?: boolean;
  showChat?: boolean;
  lat?: number;
  lng?: number;
  toggleModal?: any;
  padding?: boolean;
  showAuthOrRating?: any;
  onCallClicked?: VoidFunction;
  customCall?: boolean;
}

function MarketplaceProfileMobileButtons({
  telephone,
  showCall,
  showChat,
  lat,
  lng,
  toggleModal,
  padding,
  showAuthOrRating,
  onCallClicked,
  customCall
}: MobileButtonsProps) {
  const style = useMarketplaceProfileMobileButtonsStylesEN({});
  const userLocation = useSelector(
    (state: RootState) => state.user.geolocation
  );
  const [show, setShow] = useState(false);

  const openGoogleMap = () => {
    if (navigator.permissions && navigator.permissions.query) {
      //try permissions APIs first
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function(result) {
          // Will return ['granted', 'prompt', 'denied']
          const permission = result.state;
          if (permission === 'granted') {
            onGetCurrentLocation();
            return;
          }

          if (permission === 'denied' || 'prompt') {
            return window.open(
              `https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},15z`,
              '_blank'
            );

            return;
          }
        });
    } else if (navigator.geolocation) {
      //then Navigation APIs
      onGetCurrentLocation();
    }
  };

  const onGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      //imitate map latlng construct
      //console.log(position);

      return window.open(
        `https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/${lat},${lng}`,

        '_blank'
      );
    });
  };

  return (
    <div className={style.container}>
      {/* <Button title="Rate" icon={rate}/> */}
      <Button
        title="Directions"
        icon={map}
        // href={`https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},18z`}
        click={openGoogleMap}
        target="_blank"
      />
      {/* <Button
        title="Share"
        icon={share}
        //href={`https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},18z`}
        // target="_blank"
      /> */}
      {showCall && (
        <Button title="Call" icon={call} href={`tel:${telephone}`} />
      )}
      {customCall && <Button title="Call" icon={call} click={onCallClicked} />}
      {showChat && <Button title="Chat" icon={chat} />}
      {showAuthOrRating && (
        <Button title="Rate" icon={rate} click={showAuthOrRating} />
      )}
    </div>
  );
}

interface ButtonProps {
  title: string;
  icon: string;
  click?: VoidFunction;
  href?: string;
  target?: string;
}

const Button = ({ title, icon, click, href, target }: ButtonProps) => {
  return (
    <QButton
      onClick={click}
      outline
      style={{
        borderRadius: 16,
        height: 32,
        margin: `0 3px`,
        padding: 15,
        borderColor: Branding.Colors.black[16]
      }}
      labelStyles={{
        fontSize: 14,
        textTransform: 'none',
        color: Branding.Colors.primary.normal
      }}
      label={title}
      buttonProps={{
        startIcon: <Img source={icon} container={{ width: 24, height: 24 }} />,
        href: href,
        target: target
      }}
    />
  );
};
export default MarketplaceProfileMobileButtons;
