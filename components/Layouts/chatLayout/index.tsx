import React, {useState} from "react";
import {useChatLayoutStylesEN} from "./styleEN";
import notification from "../../../assets/icons/headerNotifications.svg";
import QIcon from "../../Atoms/icon";
import ChatPopUp from "../../Organisms/chatPopUp";

const ChatLayout = () => {
    const styles = useChatLayoutStylesEN();

    //Variable to track the state of Chat PopUp.
    const [showChatBox, setShowChatBox] = useState(false);

    const [view, setView] = useState("CHAT");

    const handleChatButtonClick = () => setShowChatBox(!showChatBox);

    const onViewChange = () => setView(view === "HOME" ? "CHAT" : "HOME");

    return !showChatBox ? (
        <QIcon
            iconProps={{width: 30, height: 30, src: notification}}
            iconStyle={styles.icon}
            click={handleChatButtonClick}
        />
    ) : (
        <ChatPopUp
            view={view}
            onClose={handleChatButtonClick}
            onViewChange={onViewChange}
        />
    );
};

export default ChatLayout;
