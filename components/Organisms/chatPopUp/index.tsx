import React, { useEffect, useRef, useState } from 'react';
import { useChatPopUpStylesEN } from './styleEN';
import ChatHeader from '../../Molecules/chatHeader';
import ChatInfoHeader from '../chatInfoHeader';
import { status, userData } from '../../../utilities/interface';
import ChatsList from '../chatsList';
import ChatView from '../chatView';
import ChatViewHeader from '../../Molecules/chatViewHeader';
import { onMobile } from '../../../utilities/utils';

//Dummy Data
const userInfo = {
  name: 'Richie Dawkins',
  status: 'ACTIVE',
  avatar: '../../../assets/images/avatar.png'
} as userData;

const agentInfo = {
  name: 'Agent Smith',
  status: 'ACTIVE',
  avatar: '../../../assets/images/avatar.png'
} as userData;

const dummyChat = [
  {
    id: 1,
    name: 'Dwayne Johnson',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Dwayne',
    status: 'ACTIVE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: true,
    lastMessageSender: 'self'
  },
  {
    id: 2,
    name: 'Ric Shaw',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Ric',
    status: 'OFFLINE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: true,
    lastMessageSender: 'sender'
  },
  {
    id: 3,
    name: 'Patty Austin',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Patty',
    status: 'ACTIVE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: false,
    lastMessageSender: 'sender'
  },
  {
    id: 4,
    name: 'Golden Gym',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Golden',
    status: 'ACTIVE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: false,
    lastMessageSender: 'self'
  },
  {
    id: 5,
    name: 'Rajdeep Gupta',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Rajdeep',
    status: 'OFFLINE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: false,
    lastMessageSender: 'self'
  },
  {
    id: 6,
    name: 'Keith Manilla',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Keith',
    status: 'ACTIVE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: false,
    lastMessageSender: 'sender'
  },
  {
    id: 7,
    name: 'Mohammad Al Fahad',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Fahad',
    status: 'OFFLINE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: false,
    lastMessageSender: 'self'
  },
  {
    id: 8,
    name: 'John Cena',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'John',
    status: 'ACTIVE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: false,
    lastMessageSender: 'sender'
  },
  {
    id: 9,
    name: 'Rey Mysterio',
    avatar: '../../../assets/images/avatar.png',
    displayName: 'Rey',
    status: 'OFFLINE',
    lastMessage: 'U need investors bro?',
    lastMessageTime: '4m',
    lastMessageUnread: false,
    lastMessageSender: 'self'
  }
];

const chatHeaderTitle = 'Chat';

interface ChatPopUpProps {
  view: string;
  onClose: () => void;
  onViewChange: () => void;
}

/**
 * View to render full Chat PopUp.
 * @param view - chat view to be displayed
 * @param onClose - click handler for closing popUp
 * @param onViewChange - click handler to switch the chat view
 */
const ChatPopUp = ({
  view = 'HOME',
  onClose,
  onViewChange
}: ChatPopUpProps) => {
  let ref = useRef<null | HTMLDivElement>(null);

  const [expandedChat, setExpandedChat] = useState(false);

  //Handling outside click of Chat PopUp
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref?.current?.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const [chatData, setChatData] = useState(dummyChat);
  const [selectedChatId, setSelectedChatId] = useState(0);
  const [agentData, setAgentData] = useState(agentInfo);
  //Handling the expandButtonClick
  const handleExpandClick = () => {
    if (onMobile()) return;
    if (!expandedChat && selectedChatId === 0) {
      setSelectedChatId(chatData[0].id);
      const chat = chatData.find(chat => chat.id === chatData[0].id);
      setAgentData({
        name: chat?.name as string,
        status: chat?.status as status,
        avatar: chat?.avatar
      });
    }
    setExpandedChat(!expandedChat);
  };

  useEffect(() => {
    if (view === 'HOME') {
      setChatData(dummyChat);
      setSelectedChatId(0);
      setAgentData(agentInfo);
    }
  }, [view]);

  const handleChatClick = (chatId: string | number) => {
    if (selectedChatId === parseInt(chatId as string)) return;
    setSelectedChatId(parseInt(chatId as string));
    const chat = chatData.find(chat => chat.id === chatId);
    setAgentData({
      name: chat?.name as string,
      status: chat?.status as status,
      avatar: chat?.avatar
    });
    if (!expandedChat) onViewChange();
  };

  //Search handler for chat popup - Filter the chat data on the basis of search text
  const handleSearch = (text: string) => {
    const filteredChatData = dummyChat.filter(
      chat =>
        chat.name.toLowerCase().startsWith(text.toLowerCase()) ||
        chat.displayName.toLowerCase().startsWith(text.toLowerCase())
    );
    setChatData(filteredChatData);
  };

  //Handler function for chat send button
  const handleSendChat = (text: string) => {};

  const styles = useChatPopUpStylesEN({ expandedChat });

  const renderExpandedView = () => {
    return (
      <div style={{ display: 'flex' }}>
        <div className={styles.leftSection}>
          <ChatInfoHeader
            view={view}
            onExpandClick={handleExpandClick}
            onBackClick={onViewChange}
            userInfo={userInfo}
            chatUserInfo={agentData}
            onSearchTextChange={handleSearch}
            expandedChat={expandedChat}
          />
          <ChatsList
            chats={chatData}
            selectedChatId={selectedChatId}
            onChatClick={handleChatClick}
            expandedChat={expandedChat}
          />
        </div>
        <div className={styles.rightSection}>
          <ChatViewHeader
            data={agentData}
            expandedChat={expandedChat}
            onExpandClick={handleExpandClick}
            onBackClick={onViewChange}
          />
          <ChatView
            chat={{}}
            handleSendChat={handleSendChat}
            expandedChat={expandedChat}
          />
        </div>
      </div>
    );
  };

  const renderNormalView = () => {
    return (
      <>
        <ChatInfoHeader
          view={view}
          onExpandClick={handleExpandClick}
          onBackClick={onViewChange}
          userInfo={userInfo}
          chatUserInfo={agentData}
          onSearchTextChange={handleSearch}
          expandedChat={expandedChat}
        />
        {view === 'HOME' ? (
          <ChatsList
            selectedChatId={selectedChatId}
            chats={chatData}
            onChatClick={handleChatClick}
            expandedChat={expandedChat}
          />
        ) : (
          <ChatView
            chat={{}}
            handleSendChat={handleSendChat}
            expandedChat={expandedChat}
          />
        )}
      </>
    );
  };

  return (
    <div ref={ref} className={styles.popUpContainer}>
      <ChatHeader
        title={chatHeaderTitle}
        onClose={onClose}
        // expandedChat={expandedChat}
      />
      {expandedChat ? renderExpandedView() : renderNormalView()}
    </div>
  );
};

export default ChatPopUp;
