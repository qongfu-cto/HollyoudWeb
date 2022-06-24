import React from 'react';
import { Branding } from '../../../utilities/branding';
import QIcon from '../../Atoms/icon';
import back from '../../../assets/icons/back-arrow.svg';
import AvatarWithStatus from '../avatarWithStatus';
import Text from '../../Atoms/text';
import maximize from '../../../assets/icons/maximize.svg';
import minimize from '../../../assets/icons/minimize.svg';
import { userData } from '../../../utilities/interface';
import { useChatViewHeaderStylesEN } from './styleEN';
import { onMobile } from '../../../utilities/utils';

interface ChatViewHeaderProps {
  data: userData;
  onExpandClick: () => void;
  onBackClick: () => void;
  expandedChat: boolean;
}

/**
 * View to render Chat Popup home view
 * @param data - User data object
 * @param onExpandClick -  Click handler for expand button click
 * @param expandedChat
 * @param onBackClick - Click handler for back button click
 */
const ChatViewHeader = ({
  data,
  onExpandClick,
  expandedChat,
  onBackClick
}: ChatViewHeaderProps) => {
  const styles = useChatViewHeaderStylesEN({ expandedChat: expandedChat });
  return (
    <div className={styles.chatHeader}>
      <div className={styles.chatTitleWrapper}>
        {!expandedChat ? (
          <QIcon
            iconProps={{ width: 30, height: 30, src: back }}
            iconStyle={styles.backIcon}
            click={onBackClick}
          />
        ) : null}
        <AvatarWithStatus
          src={data?.avatar ?? '"../../../assets/images/avatar.png"'}
          avatarStyle={{
            width: 56,
            height: 56,
            border: `1px solid ${Branding.Colors.black[16]}`,
            objectFit: 'cover'
          }}
          status={data.status}
        />
        <div className={styles.chatTitle}>
          <Text
            label={data.name}
            labelColor={Branding.Colors.black['100']}
            labelStyle={{ font: 'normal 400 medium 16px/19px Roboto' }}
          />
          <Text
            label={data.status === 'ACTIVE' ? 'Active Now' : 'Away'}
            labelColor={Branding.Colors.black['60']}
            labelStyle={{ font: 'normal 300 normal 13px/15px Roboto' }}
          />
        </div>
      </div>
      {!onMobile() ? (
        <QIcon
          iconProps={{
            width: expandedChat ? 35 : 56,
            height: expandedChat ? 35 : 56,
            src: expandedChat ? minimize : maximize
          }}
          iconStyle={styles.chatIcon}
          click={onExpandClick}
        />
      ) : null}
    </div>
  );
};

export default ChatViewHeader;
