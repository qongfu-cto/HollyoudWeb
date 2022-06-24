import React from "react";
import {useChatInfoHeaderStylesEN} from "./styleEN";
import {userData} from "../../../utilities/interface";
import HomeViewHeader from "../../Molecules/homeViewHeader";
import ChatViewHeader from "../../Molecules/chatViewHeader";
import ChatSearchBox from "../../Molecules/chatSearchBox";
import QIcon from "../../Atoms/icon";
import search from "../../../assets/icons/search.svg";

interface chatInfoHeaderProps {
    view: string;
    userInfo: userData;
    chatUserInfo: userData;
    onBackClick: () => void;
    onExpandClick: () => void;
    expandedChat: boolean;
    onSearchTextChange: (key: string) => void;
}

const ChatInfoHeader = ({
                            view,
                            onExpandClick,
                            expandedChat,
                            userInfo,
                            chatUserInfo,
                            onBackClick,
                            onSearchTextChange,
                        }: chatInfoHeaderProps) => {
    const styles = useChatInfoHeaderStylesEN();
    return (
        <div className={styles.container}>
            {!expandedChat && view === "CHAT" ? (
                <ChatViewHeader
                    data={chatUserInfo}
                    expandedChat={expandedChat}
                    onExpandClick={onExpandClick}
                    onBackClick={onBackClick}
                />
            ) : (
                <HomeViewHeader
                    data={userInfo}
                    onExpandClick={onExpandClick}
                    expandedChat={expandedChat}
                    onBackClick={onExpandClick}
                    searchBox={
                        <ChatSearchBox
                            placeholder="Search"
                            onChangeText={onSearchTextChange}
                            height={40}
                            endIcon={
                                <QIcon
                                    iconProps={{width: 24, height: 24, src: search}}
                                    iconStyle={styles.searchIcon}
                                    click={() => {
                                    }}
                                />
                            }
                        />
                    }
                />
            )}
        </div>
    );
};

export default ChatInfoHeader;
