import React from 'react';
import { useChatHeaderStylesEN } from './styleEN';
import Text from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';
import QIcon from '../../Atoms/icon';
import down from '../../../assets/icons/down-arrow.svg';

interface chatHeaderProps {
  title: string;
  onClose: () => void;
  headerColor?: string;
}

const ChatHeader = ({
  title = 'Chat',
  onClose,
  headerColor = Branding.Colors.primary.normal
}: chatHeaderProps) => {
  const styles = useChatHeaderStylesEN({ color: headerColor });

  return (
    <div className={styles.headerContainer}>
      <QIcon
        iconProps={{ width: 20, height: 20, src: down }}
        iconStyle={styles.closeIcon}
        click={onClose}
      />
      <Text
        label={title}
        labelColor={Branding.Colors.white}
        labelStyle={{ font: 'normal 300 normal 24px/30px Outfit' }}
      />
    </div>
  );
};

export default ChatHeader;
