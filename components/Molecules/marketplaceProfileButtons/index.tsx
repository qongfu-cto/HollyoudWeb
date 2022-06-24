import React, { useState } from 'react';
import call from 'assets/icons/callDesktop.svg';
import rate from 'assets/icons/rateDesktop.svg';
import chat from 'assets/icons/chatDesktop.svg';
import directions from 'assets/icons/directions.svg';
import { useMarketplaceProfileMobileButtonsStylesEN } from './styleEN';
import QIcon from 'components/Atoms/icon';
import QText from 'components/Atoms/text';
import QButton from 'components/Atoms/button';
import { Branding } from 'utilities/branding';
import { openGoogleMap } from 'utilities/currentLocationMapHandler';
import { ClickAwayListener } from '@mui/material';

interface ButtonsProps {
  telephone?: string;
  showCall?: boolean;
  showChat?: boolean;
  toggleModal?: () => void;
  rating?: boolean | string;
  location: any;
  buttonsDirection?: 'column';
}

function MarketplaceProfileButtons({
  telephone,
  showCall,
  showChat,
  toggleModal,
  rating = false,
  location,
  buttonsDirection
}: ButtonsProps) {
  const style = useMarketplaceProfileMobileButtonsStylesEN({
    direction: buttonsDirection
  });
  const [show, setShow] = useState(false);
  return (
    <div className={style.container}>
      {showCall && (
        <ClickAwayListener onClickAway={() => setShow(false)}>
          <div>
            <Button title="Call" icon={call} click={() => setShow(!show)} />
            {show && (
              <DropDown
                label={'Tel :'}
                labelContent={`${telephone} `}
                buttonLabel="Call Now"
                href={`tel:${telephone}`}
              />
            )}
          </div>
        </ClickAwayListener>
      )}

      {showChat && <Button title="Chat" icon={chat} />}

      {location && (
        <Button
          title="Rate"
          icon={directions}
          click={() => openGoogleMap(location)}
          style={style.iconSize}
        />
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
  style?: string;
}

const Button = ({ title, icon, click, href, target, style }: ButtonProps) => {
  const styles = useMarketplaceProfileMobileButtonsStylesEN({});
  return (
    <div className={styles.icon}>
      <QIcon
        click={click}
        iconStyle={style}
        source={icon}
        buttonProps={{
          href: href,
          target: target
        }}
      />
    </div>
  );
};

export const DropDown = ({
  label,
  buttonLabel,
  labelContent,
  onButtonClick,
  href
}: {
  labelContent: string;
  label: string;
  buttonLabel: string;
  onButtonClick?: VoidFunction;
  href?: string;
}) => {
  const style = useMarketplaceProfileMobileButtonsStylesEN({});

  return (
    <div className={style.dropDown}>
      <div className={style.title}>
        <QText label={label} labelColor={Branding.Colors.black[48]} />
        <QText
          label={labelContent}
          labelColor={Branding.Colors.black[86]}
          labelStyle={{ fontWeight: 500, marginLeft: 5 }}
        />
      </div>

      <QButton
        style={{
          height: 40,
          borderRadius: 10,
          width: 180,
          backgroundColor: Branding.Colors.primary.normal
        }}
        labelStyles={{
          textTransform: 'none'
        }}
        label={buttonLabel}
        onClick={onButtonClick}
        buttonProps={{
          href: href
        }}
      />
    </div>
  );
};
export default MarketplaceProfileButtons;
