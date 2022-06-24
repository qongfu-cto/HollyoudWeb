import React from 'react';
import { useMessagesStylesEN } from './styleEN';
import MessageView from '../../Molecules/messageView';
import Text from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';

interface MessagesProps {
  chats: {
    id: number;
    type?: 'chat' | 'date' | 'Today';
    msg?: string;
    time?: string;
    self?: boolean;
    seen?: boolean;
    date?: string;
  }[];
  expandedChat: boolean;
}

const Messages = ({ chats, expandedChat }: MessagesProps) => {
  const styles = useMessagesStylesEN({
    height: window.innerHeight - 200,
    expandedChat: expandedChat
  });

  return (
    <div className={styles.container}>
      {chats.map(chat => {
        if (chat.type === 'chat') {
          return (
            <div key={chat.id}>
              <MessageView
                message={chat?.msg}
                time={chat?.time}
                selfMessage={chat?.self}
                seen={chat?.seen}
              />
            </div>
          );
        } else {
          return (
            <div key={chat.id}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px'
                }}
              >
                <Text
                  label={chat.date}
                  labelColor={Branding.Colors.black['60']}
                  labelStyle={{ font: 'normal 300 normal 12px/14px Roboto' }}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Messages;
