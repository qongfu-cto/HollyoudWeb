import React from 'react';
import { useChatViewStylesEN } from './styleEN';
import ChatInput from '../../Molecules/chatInput';
import Messages from '../messages';

const dummyMessage =
  'Are you available for a meeting? We would like to see the property in Jenabiya.';

const dummyMessages: {
  id: number;
  type?: 'chat' | 'date' | 'Today';
  msg?: string;
  time?: string;
  self?: boolean;
  seen?: boolean;
  date?: string;
}[] = [
  {
    id: 10,
    date: 'Sep 21, 2021',
    type: 'date'
  },
  {
    id: 1,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: true,
    seen: true
  },
  {
    id: 2,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: true,
    seen: true
  },
  {
    id: 3,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: false
  },
  {
    id: 4,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: true,
    seen: true
  },
  {
    id: 9,
    date: 'Sep 22, 2021',
    type: 'date'
  },
  {
    id: 5,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: false
  },
  {
    id: 6,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: false
  },
  {
    id: 7,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: true,
    seen: false
  },
  {
    id: 11,
    date: 'Today',
    type: 'date'
  },
  {
    id: 8,
    msg: dummyMessage,
    type: 'chat',
    time: '8:32 AM',
    self: true,
    seen: false
  }
];

interface ChatViewProps {
  chat: object;
  handleSendChat: (text: string) => void;
  expandedChat: boolean;
}

const ChatView = ({ chat, handleSendChat, expandedChat }: ChatViewProps) => {
  const styles = useChatViewStylesEN({
    height: window.innerHeight - 144,
    expandedChat: expandedChat
  });

  return (
    <div className={styles.container}>
      <Messages expandedChat={expandedChat} chats={dummyMessages} />
      <ChatInput initialValue={''} onSubmit={handleSendChat} />
    </div>
  );
};

export default ChatView;
