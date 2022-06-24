import React from 'react';
import { useChatsListStylesEN } from './styleEN';
import ChatRow from '../../Molecules/chatRow';
import { Branding } from '../../../utilities/branding';

interface ChatsListProps {
  chats: { id: number }[];
  onChatClick: (key: string | number) => void;
  selectedChatId: number;
  expandedChat: boolean;
}

const ChatsList = ({
  chats,
  onChatClick,
  expandedChat,
  selectedChatId
}: ChatsListProps) => {
  const styles = useChatsListStylesEN({ height: window.innerHeight - 196 });

  return (
    <div className={styles.container}>
      {chats.map(chat => {
        return (
          <div
            key={`chat-list-${selectedChatId === chat?.id ? 'selected' : ''}${
              chat?.id
            }`}
          >
            <ChatRow
              selectedChatId={selectedChatId}
              backgroundColor={
                selectedChatId === chat.id
                  ? Branding.Colors.black['16']
                  : 'none'
              }
              expandedChat={expandedChat}
              chat={chat}
              onClick={onChatClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatsList;
