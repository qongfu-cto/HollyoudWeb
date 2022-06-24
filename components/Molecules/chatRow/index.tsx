import React from 'react';
import { useChatRowStylesEN } from './styleEN';
import Text from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';
import QAvatar from '../../Atoms/avatar';

const avatarStyle = {
  width: 56,
  height: 56,
  objectFit: 'cover'
} as object;

const labelStyle = {
  font: 'normal 300 normal 13px/15px Roboto'
};

interface chatRowProps {
  chat: any;
  backgroundColor: string;
  onClick: (key: string | number) => void;
  selectedChatId: number;
  expandedChat: boolean;
}

const ChatRow = ({
  chat,
  backgroundColor,
  onClick,
  selectedChatId,
  expandedChat
}: chatRowProps) => {
  const styles = useChatRowStylesEN({
    selected: selectedChatId === chat.id,
    expandedChat: expandedChat
  });
  const statusBackgroundColor =
    chat.status === 'ACTIVE'
      ? Branding.Colors.green.variant_1
      : Branding.Colors.black['36'];
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={styles.container}
      onClick={() => onClick(chat?.id)}
    >
      <QAvatar
        avatar={chat?.avatar ?? '"../../../assets/images/avatar.png"'}
        avatarStyle={avatarStyle}
      />
      <div className={styles.title}>
        <Text
          label={chat?.displayName}
          labelColor={Branding.Colors.black['100']}
          labelStyle={{ font: 'normal 400 medium 16px/19px Roboto' }}
        />
        <div className={styles.subTitle}>
          <Text
            label={
              chat?.lastMessageSender === 'self'
                ? 'You:'
                : `${chat?.displayName}:`
            }
            labelColor={Branding.Colors.black['100']}
            labelStyle={{ ...labelStyle, marginRight: 4 }}
          />
          <Text
            label={chat?.lastMessage}
            labelColor={Branding.Colors.black['100']}
            labelStyle={{ ...labelStyle, marginRight: 4 }}
          />
          <Text
            label={`-  ${chat?.lastMessageTime}`}
            labelColor={Branding.Colors.black['60']}
            labelStyle={labelStyle}
          />
        </div>
      </div>
      <div
        className={styles.status}
        style={{ backgroundColor: statusBackgroundColor }}
      />
    </div>
  );
};

export default ChatRow;
